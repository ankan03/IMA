package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/SearchInvoiceDataServlet")
public class SearchInvoiceDataServlet extends HttpServlet{
	
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
	  // Database credentials
	  static final String USER = "root";
	  static final String PASS = "root";
	  
	  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		  Connection conn = null;
		  PreparedStatement pStatement=null;
		  ResultSet resultSet = null;
		  Double invoiceId1;
		  int status=0; 
		  
		  String invoiceId = request.getParameter("invoice_id");
		 
//		  List<InvoiceDetails> invoiceData = new ArrayList<>();
		  
		  try {
			    Class.forName("com.mysql.cj.jdbc.Driver");
			    conn = DriverManager.getConnection(DB_URL,USER,PASS);
			    String deleteSQL = "SELECT * FROM invoice_details WHERE invoice_id LIKE ?";    
			    pStatement = conn.prepareStatement(deleteSQL);
			    
			    try {
			    	invoiceId1 = Double.parseDouble(invoiceId);
				} catch (Exception e) {
					invoiceId1 = null;
				}
			    pStatement.setString(1, invoiceId+"%");
	            resultSet = pStatement.executeQuery();
	            
	              
	            
	            List<InvoiceDetails> invoiceData = new ArrayList<>();
	            
	            while(resultSet.next()) {

	            	InvoiceDetails invoiceDetails = new InvoiceDetails();
	            	
	            	try {
	            		invoiceDetails.setBusinessCode(resultSet.getString(1).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setBusinessCode(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setCustNumber(resultSet.getString(2).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setCustNumber(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setNameCustomer(resultSet.getString(3).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setNameCustomer(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setClearDate(resultSet.getString(4).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setClearDate(null);
	        		}
	            	
	            	try {
	            		int i = convBusinessYear(resultSet.getString(5));
	            		invoiceDetails.setBusinessYear(String.valueOf(i));
	        		} catch (Exception e) {
	        			invoiceDetails.setBusinessYear(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setDocId(resultSet.getString(6).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setDocId(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setPostingDate(resultSet.getString(7).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setPostingDate(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setDocumentCreateDate(resultSet.getString(8).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setDocumentCreateDate(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setDocumentCreateDate1(resultSet.getString(9).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setDocumentCreateDate1(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setDueInDate(resultSet.getString(10).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setDueInDate(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setInvoiceCurrency(resultSet.getString(11).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setInvoiceCurrency(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setDocumentType(resultSet.getString(12).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setDocumentType(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setPostingId(resultSet.getString(13).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setPostingId(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setAreaBusiness(resultSet.getString(14).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setAreaBusiness(null);
	        		}

	            	
	            	try {
	            		invoiceDetails.setTotalOpenAmount(resultSet.getString(15).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setTotalOpenAmount(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setBaselineCreateDate(resultSet.getString(16).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setBaselineCreateDate(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setCustPaymentTerms(resultSet.getString(17).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setCustPaymentTerms(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setInvoiceId(resultSet.getString(18).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setInvoiceId(null);
	        		}
	            	
	            	try {
	            		invoiceDetails.setIsOpen(resultSet.getString(19).toString());
	        		} catch (Exception e) {
	        			invoiceDetails.setIsOpen(null);
	        		}
	            	
	            	
	            	invoiceData.add(invoiceDetails);
	            	
	            }
	            	
	            	GsonBuilder gsonBuilder = new GsonBuilder();  
	            	gsonBuilder.serializeNulls();  
	            	Gson gson = gsonBuilder.create();
	            	String sqlData = gson.toJson(invoiceData); 
	            
//	            	String sqlData = new Gson().toJson(invoiceData);
	        		PrintWriter out = response.getWriter();
	        		System.out.println("Size = "+invoiceData.size());
	        		response.setContentType("application/json");
	        		response.setCharacterEncoding("UTF-8");
	        		out.print(sqlData);
	        		out.flush(); 
	        		
	        		conn.close(); 
	        		pStatement.close();
	        		resultSet.close();

			    
			  } catch (ClassNotFoundException e) {
			    // TODO Auto-generated catch block
			    e.printStackTrace();
			  } catch (SQLException e) {
			    // TODO Auto-generated catch block
			    e.printStackTrace();
			  }  
	  }
	  public static int convBusinessYear(String s) {
			try {
				SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
				Date date = new Date(simpleDateFormat.parse(s).getTime());
				
				Calendar calendar = new GregorianCalendar();
				calendar.setTime(date);
				int year = calendar.get(Calendar.YEAR);
			return year;
			}
			catch(Exception e) {
			e.printStackTrace();
			}
			return 0;

			}

}

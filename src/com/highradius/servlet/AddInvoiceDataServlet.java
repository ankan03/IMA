package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
//import java.util.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

@WebServlet("/AddInvoiceDataServlet")
public class AddInvoiceDataServlet extends HttpServlet {
	
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
	  // Database credentials
	  static final String USER = "root";
	  static final String PASS = "root";
	
public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	
		Connection conn = null;
		PreparedStatement pStatement=null;
		
		
		
		String customerName = request.getParameter("customer_name");
		String customerNo = request.getParameter("customer_no");
		String invoiceNo = request.getParameter("invoice_no");
		String invoiceAmount = request.getParameter("invoice_amount");
		String dueDate = request.getParameter("due_date");
		String notes = request.getParameter("notes");
		
		String businessCode,custName,customerPaymentTerms,areaBusiness,documentType,invoiceCurrency,notesData;
		Date clearDate,documentCreateDate,documentCreateDate1,baseLineCreateDate,dueInDate,postingDate;
		Integer custNumber,isOpen;
		Float postingId,businessYear;
		Double totalOpenAmount,invoiceId;//,docId;
		Long docId;
		
//		PrintWriter out = response.getWriter();
//		out.print(customerName+"\t"+customerNo+"\t"+invoiceNo+"\t"+invoiceAmount+"\t"+dueDate);
		
		try {
		    Class.forName("com.mysql.cj.jdbc.Driver");
		    conn = DriverManager.getConnection(DB_URL,USER,PASS);
		    String insertSQL = "INSERT INTO invoice_details (business_code,cust_number,name_customer,clear_date,business_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen,notes) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		    
		    pStatement = conn.prepareStatement(insertSQL);
		  
		    
		    try {
				businessCode="U001";
			} catch (Exception firstNameNUll) {
				// TODO: handle exception
				businessCode=null;
			}
		    
		    
			 try {
				 custNumber=Integer.valueOf(customerNo);
			 }
			 catch (Exception e) {
				// TODO: handle exception
				 custNumber=null;
			}
			 
			 
			 try {
				custName=customerName;
			} catch (Exception serialNumberNull) {
				// TODO: handle exception
				custName=null;
			}
			 
			 
			 try {
				clearDate=null;
			} catch (Exception aliasNull) {
				// TODO: handle exception
				clearDate=null;
			}
			 
			 
			 try {
				 Calendar today = Calendar.getInstance();
				 int year = today.get(Calendar.YEAR);
				 Float f = new Float(year);
				 businessYear=f;
			} catch (Exception quoteNull) {
				// TODO: handle exception
				businessYear=null;
			}
			 
			 
			 try {
				docId=generateNumber();
				} catch (Exception quoteNull) {
					// TODO: handle exception
					docId=null;
				}
			 
			 
			 try {
				 	long millis=System.currentTimeMillis();  
			        Date date1=new java.sql.Date(millis); 
					postingDate = date1;
					
					} catch (Exception quoteNull) {
						// TODO: handle exception
						postingDate=null;
					}
			 
			 
			 try {
				 	long millis=System.currentTimeMillis();  
			        Date date1=new java.sql.Date(millis); 
					documentCreateDate = date1;
					} catch (Exception quoteNull) {
						// TODO: handle exception
						documentCreateDate=null;
					}
			 
			 
			 try {
				 	long millis=System.currentTimeMillis();  
			        Date date1=new java.sql.Date(millis); 
			        documentCreateDate1 = date1;
					} catch (Exception quoteNull) {
						// TODO: handle exception
						documentCreateDate1=null;
					}
			 
			 
			 try {
					dueInDate=convPostingDate(dueDate);
		
					} catch (Exception quoteNull) {
						// TODO: handle exception
						dueInDate=null;
					}
			 
			 
			 try {
					invoiceCurrency="USD";
					} catch (Exception quoteNull) {
						// TODO: handle exception
						invoiceCurrency=null;
					}
			 
			 
			 try {
					documentType="RV";
					} catch (Exception quoteNull) {
						// TODO: handle exception
						documentType=null;
					}
			 
			 
			 try {
					postingId=Float.parseFloat("1.0");
					} catch (Exception quoteNull) {
						// TODO: handle exception
						postingId=null;
					}
			 
			 
			 try {
					areaBusiness=null;
					} catch (Exception quoteNull) {
						// TODO: handle exception
						areaBusiness=null;
					}
			 
			 
			 try {
					totalOpenAmount=Double.parseDouble(invoiceAmount);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						totalOpenAmount=null;
					}
			 
			 
			 try {
				 	long millis=System.currentTimeMillis();  
			        Date date1=new java.sql.Date(millis); 
			        baseLineCreateDate = date1;
				 
					} catch (Exception quoteNull) {
						// TODO: handle exception
						baseLineCreateDate=null;
					}
			 
			 
			 try {
					customerPaymentTerms="NAM4";
					} catch (Exception quoteNull) {
						// TODO: handle exception
						customerPaymentTerms=null;
					}
			 
			 
			 try {
					invoiceId=Double.parseDouble(invoiceNo);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						invoiceId=null;
					}
			 
			 
			 try {
					isOpen=Integer.parseInt("1");
					} catch (Exception quoteNull) {
						// TODO: handle exception
						isOpen=0;
					}
			 
			 try {
					notesData=notes;
				} catch (Exception serialNumberNull) {
					// TODO: handle exception
					notesData=null;
				}
		    
		    
			 pStatement.setString(1, businessCode);               
	    	  pStatement.setObject(2, custNumber);
	    	  pStatement.setString(3, customerName);			    	
	    	  pStatement.setDate(4, clearDate);
	    	  pStatement.setObject(5, businessYear);
	    	  pStatement.setObject(6, docId);
	    	  pStatement.setDate(7, postingDate);
	    	  pStatement.setDate(8, documentCreateDate);
	    	  pStatement.setDate(9, documentCreateDate1);
	    	  pStatement.setDate(10, dueInDate);
	    	  pStatement.setString(11,invoiceCurrency);
	    	  pStatement.setString(12, documentType);
	    	  pStatement.setObject(13, postingId);
	    	  pStatement.setString(14, areaBusiness);
	    	  pStatement.setObject(15, totalOpenAmount);
	    	  pStatement.setDate(16, baseLineCreateDate);
	    	  pStatement.setString(17, customerPaymentTerms);
	    	  pStatement.setObject(18, invoiceId);
	    	  pStatement.setObject(19, isOpen);
	    	  pStatement.setString(20, notesData);
		    
		    
		    
		    pStatement.executeUpdate();	    
		    pStatement.close(); 
            conn.close();
            
            PrintWriter out = response.getWriter();
            
            JsonObject jsonMessage = new JsonObject();
            jsonMessage.addProperty("message", "Successfully inserted");   
            out.print(jsonMessage.toString());

		    
		  } catch (ClassNotFoundException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		  } catch (SQLException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		  }
		
		
	}

	public static long generateNumber()
	{
		return (long)(Math.random()*10000000000L);
	}

	public static Date convPostingDate(String s) {
		try {
			SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
			Date date = new Date(simpleDateFormat.parse(s).getTime());
		return date;
		}
		catch(Exception e) {
		e.printStackTrace();
		}
		return null;

		}
}

package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.sql.*;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.sun.corba.se.pept.transport.Connection;


@WebServlet("/RetriveInvoiceDataPageServlet")
public class RetriveInvoiceDataPageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	  static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
	  // Database credentials
	  static final String USER = "root";
	  static final String PASS = "root";



	  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		  String spageid=request.getParameter("page");  
	        int pageid=Integer.parseInt(spageid);  
	        int total=50;  
	        if(pageid==1){}  
	        else{  
	            pageid=pageid-1;  
	            pageid=pageid*total+1;  
	        }  
	        List<InvoiceDetails> list=getRecords(pageid,total);  
		  
		  
		  
	    GsonBuilder gsonBuilder = new GsonBuilder();  
	    gsonBuilder.serializeNulls();  
	    Gson gson = gsonBuilder.create();
	    String sqlData = gson.toJson(list);  
//      	String sqlData = new Gson().toJson(list);
  		PrintWriter out = response.getWriter();
  		System.out.println("Size = "+list.size());
  		response.setContentType("application/json");
  		response.setCharacterEncoding("UTF-8");
  		out.print(sqlData);
  		out.flush(); 
		
	}

	public static List<InvoiceDetails> getRecords(int start,int total){  

        
        List<InvoiceDetails> invoiceData = new ArrayList<>();
        java.sql.Connection conn = null;
        Statement stmt = null;
        
        try {

            
            DatabaseConnection dc = new DatabaseConnection();
            conn = dc.initializeDatabase();
            
            
            stmt =  conn.createStatement();
            String sql;
            sql = "SELECT * FROM invoice_details limit "+(start-1)+","+total;
            ResultSet rs = stmt.executeQuery(sql);
            
            
            while(rs.next()) {

            	InvoiceDetails invoiceDetails = new InvoiceDetails();
            	
            	try {
            		invoiceDetails.setBusinessCode(rs.getString(1).toString());
        		} catch (Exception e) {
        			invoiceDetails.setBusinessCode(null);
        		}
            	
            	try {
            		invoiceDetails.setCustNumber(rs.getString(2).toString());
        		} catch (Exception e) {
        			invoiceDetails.setCustNumber(null);
        		}
            	
            	try {
            		invoiceDetails.setNameCustomer(rs.getString(3).toString());
        		} catch (Exception e) {
        			invoiceDetails.setNameCustomer(null);
        		}
            	
            	try {
            		invoiceDetails.setClearDate(rs.getString(4).toString());
        		} catch (Exception e) {
        			invoiceDetails.setClearDate(null);
        		}
            	
            	try {
            		int i = convBusinessYear(rs.getString(5));
            		invoiceDetails.setBusinessYear(String.valueOf(i));
        		} catch (Exception e) {
        			invoiceDetails.setBusinessYear(null);
        		}
            	
            	try {
            		invoiceDetails.setDocId(rs.getString(6).toString());
        		} catch (Exception e) {
        			invoiceDetails.setDocId(null);
        		}
            	
            	try {
            		invoiceDetails.setPostingDate(rs.getString(7).toString());
        		} catch (Exception e) {
        			invoiceDetails.setPostingDate(null);
        		}
            	
            	try {
            		invoiceDetails.setDocumentCreateDate(rs.getString(8).toString());
        		} catch (Exception e) {
        			invoiceDetails.setDocumentCreateDate(null);
        		}
            	
            	try {
            		invoiceDetails.setDocumentCreateDate1(rs.getString(9).toString());
        		} catch (Exception e) {
        			invoiceDetails.setDocumentCreateDate1(null);
        		}
            	
            	try {
            		invoiceDetails.setDueInDate(rs.getString(10).toString());
        		} catch (Exception e) {
        			invoiceDetails.setDueInDate(null);
        		}
            	
            	try {
            		invoiceDetails.setInvoiceCurrency(rs.getString(11).toString());
        		} catch (Exception e) {
        			invoiceDetails.setInvoiceCurrency(null);
        		}
            	
            	try {
            		invoiceDetails.setDocumentType(rs.getString(12).toString());
        		} catch (Exception e) {
        			invoiceDetails.setDocumentType(null);
        		}
            	
            	try {
            		invoiceDetails.setPostingId(rs.getString(13).toString());
        		} catch (Exception e) {
        			invoiceDetails.setPostingId(null);
        		}
            	
            	try {
            		invoiceDetails.setAreaBusiness(rs.getString(14).toString());
        		} catch (Exception e) {
        			invoiceDetails.setAreaBusiness(null);
        		}

            	
            	try {
            		invoiceDetails.setTotalOpenAmount(rs.getString(15).toString());
        		} catch (Exception e) {
        			invoiceDetails.setTotalOpenAmount(null);
        		}
            	
            	try {
            		invoiceDetails.setBaselineCreateDate(rs.getString(16).toString());
        		} catch (Exception e) {
        			invoiceDetails.setBaselineCreateDate(null);
        		}
            	
            	try {
            		invoiceDetails.setCustPaymentTerms(rs.getString(17).toString());
        		} catch (Exception e) {
        			invoiceDetails.setCustPaymentTerms(null);
        		}
            	
            	try {
            		invoiceDetails.setInvoiceId(rs.getString(18).toString());
        		} catch (Exception e) {
        			invoiceDetails.setInvoiceId(null);
        		}
            	
            	try {
            		invoiceDetails.setIsOpen(rs.getString(19).toString());
        		} catch (Exception e) {
        			invoiceDetails.setIsOpen(null);
        		}
            	
            	try {
            		invoiceDetails.setNotes(rs.getString(20).toString());
        		} catch (Exception e) {
        			invoiceDetails.setIsOpen(null);
        		}
            	
            	
            	invoiceData.add(invoiceDetails);
            	
            }
            
            conn.close();
            } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
        return invoiceData;  
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

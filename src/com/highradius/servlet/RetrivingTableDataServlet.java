package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.db.Connection.Avengers;

public class RetrivingTableDataServlet extends HttpServlet{

	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
	  // Database credentials
	  static final String USER = "root";
	  static final String PASS = "root";

public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
	Connection conn = null;
  Statement stmt = null;
  
  try {
    Class.forName("com.mysql.cj.jdbc.Driver");
    conn = DriverManager.getConnection(DB_URL,USER,PASS);
    stmt = conn.createStatement();
    String sql;
    sql = "SELECT * FROM invoice_details";
    ResultSet rs = stmt.executeQuery(sql);
    
    
    List<InvoiceDetails> invoiceData = new ArrayList<>();
    
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
    	
    	
    	invoiceData.add(invoiceDetails);
    	
    }
    
    	String sqlData = new Gson().toJson(invoiceData);
		PrintWriter out = response.getWriter();
		System.out.println("Size = "+invoiceData.size());
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(sqlData);
		out.flush(); 

    
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

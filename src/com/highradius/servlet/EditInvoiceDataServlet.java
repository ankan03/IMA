package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

@WebServlet("/EditInvoiceDataServlet")
public class EditInvoiceDataServlet extends HttpServlet {
	
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
	  // Database credentials
	  static final String USER = "root";
	  static final String PASS = "root";
	  
	  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		  
		  EditRequest invoice = new Gson().fromJson(request.getReader(), EditRequest.class);
		  System.out.println("doc_id = "+invoice.getDoc_id());
		  System.out.println(" updated_amount = "+invoice.getUpdated_amount());
		  System.out.println("note = "+invoice.getNote());
		  
		  
		  
		  
		  Connection conn = null;
		  PreparedStatement pStatement=null;
		  
//		  String docId = request.getParameter("doc_id");
//		  String updatedAmount = request.getParameter("updated_amount");
//		  String notes = request.getParameter("note");
//		  
//		  System.out.println("getParameter doc_id = "+docId);
//		  System.out.println("getParameter updated_amount = "+updatedAmount);
//		  System.out.println("getParameter note = "+notes);
		  
		  
		  
		  
		  
		  Double docId1 ,updatedAmount1;
		  String notesData;
		  int status=0; 
		  
		  try {
			    Class.forName("com.mysql.cj.jdbc.Driver");
			    conn = DriverManager.getConnection(DB_URL,USER,PASS);
			    String editSQL = "UPDATE invoice_details SET total_open_amount = ?,notes=? WHERE doc_id=?";    //notes
			 
			    pStatement = conn.prepareStatement(editSQL);
			    
			    try {
					docId1 = Double.parseDouble(invoice.getDoc_id());
				} catch (Exception e) {
					docId1 = null;
				}
			    
			    try {
					notesData=invoice.getNote();
				} catch (Exception serialNumberNull) {
					// TODO: handle exception
					notesData=null;
				}
				  
				  try {
					  updatedAmount1 = Double.parseDouble(invoice.getUpdated_amount());
				} catch (Exception e) {
					  updatedAmount1 = null;
				}
			  
			    pStatement.setObject(1, updatedAmount1);
			    pStatement.setString(2, notesData);
			    pStatement.setObject(3,docId1);  
	            
	              
	            status = pStatement.executeUpdate();  
	            conn.close();  
			   System.out.println("edit status = "+ status);
			   
			   PrintWriter out = response.getWriter(); 
//	           out.println("<html><body><b>Successfully Edited" + "</b></body></html>"); 
			   	
			   JsonObject jsonMessage = new JsonObject();
			   if (status>0) {
				   jsonMessage.addProperty("message", "Successfully Edited");  
			} else {
				jsonMessage.addProperty("message", "Edit Failed");  
			}
	            
	           out.print(jsonMessage.toString());

			    
			  } catch (ClassNotFoundException e) {
			    // TODO Auto-generated catch block
			    e.printStackTrace();
			  } catch (SQLException e) {
			    // TODO Auto-generated catch block
			    e.printStackTrace();
			  }
		
		  
		  
	  }

}

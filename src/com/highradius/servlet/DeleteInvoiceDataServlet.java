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

@WebServlet("/DeleteInvoiceDataServlet")
public class DeleteInvoiceDataServlet extends HttpServlet {

	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
	  // Database credentials
	  static final String USER = "root";
	  static final String PASS = "root";
	  
	  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		  
		  EditRequest invoice = new Gson().fromJson(request.getReader(), EditRequest.class);
		  System.out.println("DeleteInvoiceDataServlet doc_id = "+invoice.getDoc_id());
		  for (int i = 0; i < invoice.getArr().length; i++) {
			  System.out.println("DeleteInvoiceDataServlet arr = "+invoice.getArr()[i]);
			  deleteSingleItem(invoice.getArr()[i]);
			
		}
		  
		  
		  
		  
		    
	  }

	private void deleteSingleItem(String individualDocId) {
		Connection conn = null;
		  PreparedStatement pStatement=null;
		  
//		  String docId = request.getParameter("doc_id");
		  
		  Double docId1;
		  int status=0; 
		  
		  try {
			    Class.forName("com.mysql.cj.jdbc.Driver");
			    conn = DriverManager.getConnection(DB_URL,USER,PASS);
			    String deleteSQL = "DELETE FROM invoice_details WHERE doc_id=?";    
			    pStatement = conn.prepareStatement(deleteSQL);
			    
			    try {
					docId1 = Double.parseDouble(individualDocId);
				} catch (Exception e) {
					docId1 = null;
				}
			  
			    pStatement.setObject(1, docId1);
	            
	              
	            status = pStatement.executeUpdate();  
	            conn.close();  
			   System.out.println("delete status = "+ status);
			   
//			   PrintWriter out = response.getWriter(); 
//	           JsonObject jsonMessage = new JsonObject();
//	           
//	           
//	           if (status>0) {
//	        	   jsonMessage.addProperty("message", "Successfully Deleted");  
//			} else {
//				jsonMessage.addProperty("message", "Deletion Failed");  
//			}
//	           out.print(jsonMessage.toString());

			    
			  } catch (ClassNotFoundException e) {
			    // TODO Auto-generated catch block
			    e.printStackTrace();
			  } catch (SQLException e) {
			    // TODO Auto-generated catch block
			    e.printStackTrace();
			  }
		
	}
}

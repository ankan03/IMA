package com.highradius.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.db.Connection.Avengers;

public class MyDemoServlet extends HttpServlet {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	  static final String DB_URL = "jdbc:mysql://localhost:3306/sys";
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
      sql = "SELECT * FROM avengers";
      ResultSet rs = stmt.executeQuery(sql);
      
      
      List<Avengers> data = new ArrayList<>();
      
      while(rs.next()) {
    	  
    	  Avengers avengers = new Avengers();
    	  avengers.setFirstName(rs.getString(1));
    	  avengers.setLastName(rs.getString(2));
    	  avengers.setSerial((rs.getString(3)));
    	  avengers.setAlias(rs.getString(4));
    	  avengers.setQuote(rs.getString(5));
    	  
    	  
    	  
    	  data.add(avengers);
      }
      
      	String sqlData = new Gson().toJson(data);
		PrintWriter out = response.getWriter();
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(sqlData);
		out.flush();
//      for (int i = 0; i < data.size(); i++) {
//		System.out.println(data.get(i).getFirstName());
//		
//		
//		out.println("\tFirstName = "+data.get(i).getFirstName()+"\tLastName = "+data.get(i).getLastName()+"\tSerial = "+data.get(i).getSerial()+"\tAlias = "+data.get(i).getAlias()+"\tQuote = "+data.get(i).getQuote());
//		
//	}
      

      
    } catch (ClassNotFoundException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch (SQLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
		
	}
}

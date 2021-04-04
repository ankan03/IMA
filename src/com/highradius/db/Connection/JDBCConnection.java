package com.highradius.db.Connection;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class JDBCConnection {
  
  static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
  static final String DB_URL = "jdbc:mysql://localhost:3306/sys";
  // Database credentials
  static final String USER = "root";
  static final String PASS = "root";
  
  public static void main(String[] args) {
    Connection conn = null;
    Statement stmt = null;
    
    try {
      Class.forName("com.mysql.cj.jdbc.Driver");
      conn = DriverManager.getConnection(DB_URL,USER,PASS);
      stmt = conn.createStatement();
      String sql;
      sql = "SELECT * FROM avengers";
      ResultSet rs = stmt.executeQuery(sql);
      
      int serial;
      int ch;
      
      List<Avengers> data = new ArrayList<>();
      
      while(rs.next()) {
    	  
    	  Avengers avengers = new Avengers();
    	  avengers.setFirstName(rs.getString(1));
    	  avengers.setLastName(rs.getString(2));
    	  avengers.setQuote(rs.getString(3));
    	  avengers.setAlias(rs.getString(4));
    	  
    	  
    	  data.add(avengers);
      }
      
      for (int i = 0; i < data.size(); i++) {
		System.out.println(data.get(i).getFirstName());
	}
      
      BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
      try {
		ch=Integer.parseInt(br.readLine());
	} catch (NumberFormatException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}

      
    } catch (ClassNotFoundException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch (SQLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }
}

package com.highradius.servlet;

import java.sql.*;

public class DatabaseConnection {
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String url = "jdbc:mysql://localhost:3306/h2h_internship";
	static final String username = "root";
	static final String password = "root";
	static Connection conn = null;
	
	public Connection initializeDatabase() {
		// TODO Auto-generated method stub	
		try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(url,username,password);
			
		
		}
		
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return conn;
	}
}

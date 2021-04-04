package com.highradius.assignment;

import java.sql.*;

public class JDBC {
	
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String url = "jdbc:mysql://localhost:3306/sys";
	static final String username = "root";
	static final String password = "root";
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(url,username,password);
			stmt = conn.createStatement();
			String sql = "select * from infinitywar";
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				
				String fname = rs.getString("First_Name");
				String lname = rs.getString("Last_Name");
				String serial = rs.getString("Serial_id");
				String alias = rs.getString("Alias");
				String quote = rs.getString("Quotes");
				
				System.out.println(fname + "\t" + lname + "\t" + serial + "\t" + alias + "\t" + quote);
				
			}
		
		rs.close();
		stmt.close();
		conn.close();
		}
		catch(SQLException se) {
			se.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			try {
				if(stmt!=null) {
					stmt.close();
				}
			}catch(SQLException se) {
				se.printStackTrace();
			}
			try {
				if(conn!=null) {
					conn.close();
				}
			}catch(SQLException se2) {
				se2.printStackTrace();
			}
		}
	}

}

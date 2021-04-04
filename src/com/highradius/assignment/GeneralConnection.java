package com.highradius.assignment;

import java.sql.*;
import java.util.Scanner;

public class GeneralConnection {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("1. display whole table data.\n 2. Display First_name:");
		System.out.println("Enter the choice:");
		Scanner sc = new Scanner(System.in);
		int choice = sc.nextInt();
		Connection1 test = new Connection1();
		Connection conn = test.Garvit();
		Statement stmt = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		
		switch(choice) {
		
		case 1: stmt = conn.createStatement();
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
		
		break;
		
		case 2: stmt = conn.createStatement();
		int s_no = sc.nextInt();
		String sql1 = "select alias,Quotes from infinitywar where Serial_id = " + s_no ;
		
		rs1 = stmt.executeQuery(sql1);
		while(rs1.next()) {
			
			String alias = rs1.getString("Alias");
			String quote = rs1.getString("Quotes");
			
			System.out.println(alias + "\n" + quote);
			
		}
		}
	
	}
	}

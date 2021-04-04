package com.highradius.assignment;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class TabletoArrayList {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		
		Connection1 cons = new Connection1();
		Connection cons1 = cons.Garvit();
		Statement stmt = cons1.createStatement();
		ResultSet rs = stmt.executeQuery("Select * from InfinityWar");
		
		ArrayList<Infinitywar_POJO> list = new ArrayList<>();
		
		while(rs.next()) {
			Infinitywar_POJO x = new Infinitywar_POJO();
			x.setFname(rs.getString("First_Name"));
			x.setLname(rs.getString("Last_Name"));
			x.setSerial(rs.getInt("Serial_id"));
			x.setAlias(rs.getString("Alias"));
			x.setQuote(rs.getString("Quotes"));
			list.add(x);
		}
		
		for(Infinitywar_POJO y: list) {
			System.out.print("First Name: " + y.getFname() + ", ");
			System.out.print("Last Name: " + y.getLname() + ", ");
			System.out.print("Serial_id: " + y.getSerial() + ", ");
			System.out.print("Alias: " + y.getAlias() + ", ");
			System.out.print("Quote: " + y.getQuote() + ", ");
			System.out.println();
		}
		
	}

}

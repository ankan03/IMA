

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.jasper.tagplugins.jstl.core.Out;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.highradius.db.Connection.Avengers;
import com.sun.corba.se.pept.transport.Connection;
import java.sql.*;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		try {
//			String dbDriver = "com.mysql.jdbc.Driver"; 
//	        String dbURL = "jdbc:mysql://localhost:3306/sys"; 
//	        String dbName = "sys"; 
//	        String dbUsername = "root"; 
//	        String dbPassword = "root"; 
	         
	        final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	        final String DB_URL = "jdbc:mysql://localhost:3306/sys";
	        // Database credentials
	        final String USER = "root";
	        final String PASS = "root";
	        
	        java.sql.Connection conn = null;
	        Statement stmt = null;
	        
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
	      	  avengers.setQuote(rs.getString(3));
	      	  avengers.setAlias(rs.getString(4));
	      	  data.add(avengers);
	        }
	        
//	        while(rs.next()) {
//	        	Avengers avg = new Avengers();
//	        	avg.setAlias(rs.getString("alias"));
//	        	avg.setFirstName(rs.getString("first_name"));
//	        	avg.setLastName(rs.getString("last_name"));
//	        	result.add(avg);
//	        	
//	        }
	        
	        Gson gson = new Gson();
//	        Gson gson = new GsonBuilder()
	        String data1 = gson.toJson(data.get(0));
	        System.out.println(data1);
	        
//	        for (int i = 0; i < data.size(); i++) {
//	    		System.out.println(data.get(i).getFirstName());
//	    	}

			
		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(400);
		}
	}

}

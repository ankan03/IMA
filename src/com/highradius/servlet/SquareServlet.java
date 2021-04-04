package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class SquareServlet extends HttpServlet{
public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	
	//request dispatcher
//		int k = (int)request.getAttribute("k");
		
	//redirect
//	int k = Integer.parseInt(request.getParameter("k")) ;
		
//		session
//		HttpSession session = request.getSession();
//		int k = (int)session.getAttribute("k");
	
	int k=0;
		
		//Cookie
		Cookie cookies[] =  request.getCookies();
		for (Cookie c : cookies) {
			if(c.getName().equals("k")) {
				k=Integer.parseInt(c.getValue());
			}
		}
		
		
		k = k*k;
		System.out.println("Hello sq");
		PrintWriter out = response.getWriter();
		out.println("result is = "+k);
	System.out.println("Inside sq");
	}
}

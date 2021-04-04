package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.http.HttpServlet;

public class AddServlet extends HttpServlet{
	
public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		int i = Integer.parseInt(request.getParameter("n1"));
		int j = Integer.parseInt(request.getParameter("n2"));
		
		int k = i+j;
//		System.out.println("result = "+k);
//		PrintWriter out = response.getWriter();
//		out.println("result = "+k);
		
		//request dispatcher
//		request.setAttribute("k", k);
//		RequestDispatcher rd = request.getRequestDispatcher("sq");
//		rd.forward(request, response);
		
		//Redirect
//		response.sendRedirect("sq?k="+k);
		
		//sesson management
//		HttpSession session = request.getSession();
//		session.setAttribute("k", k);
		
		
		//Cookie
		Cookie cookie = new Cookie("k", k+"");
		response.addCookie(cookie);
		
		response.sendRedirect("sq");
		
	}
//public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//	
//	int i = Integer.parseInt(request.getParameter("n1"));
//	int j = Integer.parseInt(request.getParameter("n2"));
//	
//	int k = i+j;
//	System.out.println("result = "+k);
//	PrintWriter out = response.getWriter();
//	out.println("result = "+k);
//}
//	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		
//		int i = Integer.parseInt(request.getParameter("n1"));
//		int j = Integer.parseInt(request.getParameter("n2"));
//		
//		int k = i+j;
//		System.out.println("result = "+k);
//		PrintWriter out = response.getWriter();
//		out.println("result = "+k);
//	}
}

package com.bansi.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bansi.dao.SignupDao;
import com.bansi.model.Signup;

@WebServlet("/register")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	public SignupServlet() {
		super();
	}
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uname = request.getParameter("uname");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		Signup signup= new Signup();
		signup.setUname(uname);
		signup.setEmail(email);
		signup.setPassword(password);
		
		SignupDao signupDao = new SignupDao();
		String result = signupDao.insert(signup);
	response.getWriter().print(result);		
	} 
		
	
}

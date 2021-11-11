package com.bansi.dao;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.bansi.model.Signup;
import com.mysql.cj.xdevapi.Statement;

public class SignupDao {
	
	private String dbUrl = "jdbc:mysql://localhost:3306/signup_details";
	private String dbUname = "root";
	private String dbPassword = "";
	private String dbDriver = "com.mysql.cj.jdbc.Driver";
	
	public void loadDriver(String dbDriver) {
		try {
			Class.forName(dbDriver);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public Connection getConnection()
	{
		Connection con = null;
		try {
		con = DriverManager.getConnection(dbUrl, dbUname, dbPassword);
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		return con;
	}
	
	public String insert(Signup signup) {
		loadDriver(dbDriver);
		Connection con = getConnection();
		String result="Data entered successfully";
		String sql = "insert into signup_details.info values ('"+signup.getUname()+"','"+signup.getEmail()+"', '"+signup.getPassword()+"')";
		
		try {
		 java.sql.Statement s = con.createStatement();
		 int result1 = s.executeUpdate(sql);
		 if (result1>0) {
			 return result;
		 }
		
		}
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result= "Data not entered";
		}
		return result;
	}
}

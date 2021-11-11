package com.bansi.dao;

import com.bansi.model.Login;

import java.sql.*;
public class LoginDao {
// public Login getLogin(String uname) {
//	 Login a1 = new Login();
//	 
//	 try {
//		 Class.forName("com.mysql.cj.jdbc.Driver");
//		 Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/signup_details","root", "");
//		 Statement st = con. createStatement();
//		 ResultSet rs = st.executeQuery("select * from signup_details.info where uname=" +uname);
//		 if(rs.next())
//		 {
//			 a1.setUname(rs.getString ("uname"));
//			 a1.setEmail(rs.getString("email"));
//			 a1.setPassword(rs.getString("password"));
//		 }
//		 
//	 }
//	 catch(Exception e) {
//		 System.out.println(e);
//	 }
//	return a1;
//	
//	
//	 
// }
	private String dbUrl = "jdbc:mysql://localhost:3306/signup_details";
	private String dbUname = "root";
	private String dbPassword = "";
	private String dbDriver ="com.mysql.cj.jdbc.Driver";
	
	
	public void loadDriver(String dbDriver)
	{
		try {
			Class.forName(dbDriver);
		} 
		catch (ClassNotFoundException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public Connection getConnection() {
		Connection con = null;
		try {
		con = DriverManager.getConnection(dbUrl, dbUname,dbPassword);
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		return con;
	
	}	
	public boolean validate(Login log) {
		
		loadDriver(dbDriver);
		Connection con = getConnection();
		boolean status = false;
		String sql = "select * from signup_details.info where uname = ? and email = ? and password = ?";
		PreparedStatement ps;
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, log.getUname());
			ps.setString(2, log.getEmail());
			ps.setString(3, log.getPassword());
			
			ResultSet rs = ps.executeQuery();
			status = rs.next();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return status;
		
	}
	
	
}

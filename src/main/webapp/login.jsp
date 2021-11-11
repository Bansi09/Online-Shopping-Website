<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
 <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <title>Login | SignUp Form</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <style type="text/css">
    	*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body{
	background:rgb(219,226,226);
}
.row{
	background:white;
	border-radius: 30px;
	
	box-shadow: 12px 12px 22px grey;
}
img{
	border-radius: 30px;
	margin-top: 50px;
    margin-left: 23px;
}
.btn1{
	border: none;
	outline: none;
	height: 50px;
	width: 100%;
	background-color: black;
	color: white;
	border-radius: 4px;
	font-weight: bold;
}
.btn1:hover{
	background-color: white;
	border: 1px solid;
	color: black;
}
@media(max-width: 800px){
	.container #img{
		border-radius: 30px;
		width: 455px;
    height: 235px;
	}
@media(max-width: 600px){
	.container #img{
		border-radius: 30px;
		width: 285px;
    height: 180px;
	}
}
    </style>
  </head>
  <body>
  	<section class="Form my-4 mx-5">
  		<div class="container">
  			<div class="row">
  				<div class="col-lg-5">
  					<img src="./images/shop.jpg" class="img-fluid" id="img" alt="Logo">
  				</div>
  				<div class="col-lg-7 px-5 pt-5">
  					<h4 class="font-weight-bold py-3">Login to your account</h4>
  					<form action="Login" method ="post">
  						<div class="form-row">
  							<div class="col-lg-7">
  								<input type="text" id ="text1" placeholder="Username" name="uname" class="form-control my-3 p-4">
  							</div>
  						</div>
  							 <div class="form-row">
  							<div class="col-lg-7">
  								<input type="email" id ="text1" placeholder="Example@gmail.com" name="email" class="form-control my-3 p-4">
  							</div>
  						</div> 
  						<div class="form-row">
  							<div class="col-lg-7">
  								<input type="password" id="text2" placeholder="*****" name= "password" class="form-control my-3 p-4">
  							</div>
  						</div> 
  						<div class="form-row">
  							<div class="col-lg-7">
  								<input type="submit" value="Login" class="btn1"/>
  							</div>
  						</div>
  						<p>
  							Don't have an account? <a href="signup.jsp">Register Here</a>
  						</p>
  					</form>
  				</div>
  			</div>
  		</div>
  	</section>
  	

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
    integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
   
 
   <script>
    $('#button').click(function(){
      var val1 = $('#text1').val();
      var val2 = $('#text2').val();
      $.ajax({
        type: 'POST',
        url: 'login.php',
        data: { text1: val1, text2: val2},
        success: function(response){
          localStorage.setItem('myresponse', response);
          window.location.href = 'index.html';
        }
      });
      
    });
   </script>
  </body>
</html>
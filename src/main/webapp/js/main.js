let carts = document.querySelectorAll('.add-cart');
let products =[
{
	name: 'Drawstring Hoodie',
	tag: 'drawstringhoodie',
	price:1000,
	inCart:0
},
{
	name: 'White Shirt',
	tag: 'whiteshirt',
	price:800,
	inCart:0
},
{
	name: 'Kurti',
	tag: 'kurti',
	price:500,
	inCart:0
},
{
	name: 'Basic T-shirt',
	tag: 'basictshirt',
	price:700,
	inCart:0
},
{
	name: 'Converse Shoes',
	tag: 'converseshoes',
	price:1500,
	inCart:0
},
{
	name: 'Classic Hoodie',
	tag: 'classichoodie',
	price:1200,
	inCart:0
},
{
	name: 'Watch',
	tag: 'watch',
	price: 2000,
	inCart:0
},
{
	name: 'Shoes',
	tag: 'shoes',
	price:1000,
	inCart:0
},
{
	name: 'Classic T-shirt',
	tag: 'classictshirt',
	price:500,
	inCart:0
}
];
for(let i=0; i< carts.length;i++){
	carts[i].addEventListener('click',()=> {
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}
/*After refreshing browser the products in the cart stays*/
function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.right-menu span').textContent =productNumbers;
	}
}
/*After clicking on any products it updates the cart number*/
function cartNumbers(product){
	//console.log("The product clicked is: ",product); gives details of the product that is selected
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers){   /*If already an item is present then increment cart value*/
		localStorage.setItem('cartNumbers',productNumbers+1);
		document.querySelector('.right-menu span').textContent =productNumbers+1;
	}
	else{   /*If no item is present before then make cart value as 1*/
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.right-menu span').textContent =1;
	}
	setItems(product);
}
function setItems(product){
	let cartItems = localStorage.getItem('productsInCart');
	//console.log("My cart items are: ", cartItems);  
	cartItems = JSON.parse(cartItems);  /*parse from JSON to JS object*/
	
	if(cartItems != null){  //to update inCart if more than one item

		if(cartItems[product.tag] == undefined){
			cartItems = 
			{
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1; //updates if more than one item
	}
	else{   
			product.inCart= 1;// first time clicking before it is empty

			cartItems={
				[product.tag]: product
			}
		}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems)); //for converting JS object to JSON object
}


function totalCost(product){
	// console.log("The prod price is", product.price);
	let cartCost = localStorage.getItem('totalCost') ;
	//console.log("My cart cost is:", cartCost);
	//console.log(typeof cartCost);
	if(cartCost != null){
		cartCost = parseInt(cartCost);
		//console.log(typeof cartCost);
		localStorage.setItem("totalCost", cartCost+ product.price); //adds the cost if there is any from the localStorage
	}else{
	localStorage.setItem('totalCost', product.price);
}
}

//Displaying products in the cart page
function displayCart(){
	let cartItems =localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productsContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalCost') ;
	console.log(cartItems);
	if(cartItems && productsContainer){ //to check if we have products in localStorage
		productsContainer.innerHTML ='';
		Object.values(cartItems).map(item =>{
			productsContainer.innerHTML += `
			<div class="products">
				<img src="images/${item.tag}.jpg">
				<span class="name">${item.name}</span>
			<i class="fas fa-times"></i>
			<div class="price">Rs${item.price}.00</div>
			<div class="quantity">
			<span class="quant">${item.inCart}</span>
			</div>
			<div class="total">
			Rs${item.inCart * item.price}.00
			</div>
			</div>
			`;
		});

productsContainer.innerHTML += `
	<div class="totalContainer">
		<h4 class="totalTitle">SubTotal</h4>
		<h4 class = "basketTotal">
			Rs${cartCost}.00
		</h4>
`;
	}
	deleteButtons();
}
//Removing the items from cart pg
function deleteButtons(){
	let deleteButtons = document.querySelectorAll('.products i');
	let productName;
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	console.log(cartItems);
	let cartCost = localStorage.getItem('totalCost');
		
	for(let i=0; i < deleteButtons.length; i++){
		deleteButtons[i].addEventListener('click', () => {
			//console.log("clicked");
			productName = deleteButtons[i]
			.parentElement.textContent.trim().toLowerCase().replace(/ /g,'');
			console.log(productName);
			console.log(cartItems[productName].name + " " + cartItems[productName].inCart);
			console.log("we have " +productNumbers + "products in cart");
			
			//localStorage.setItem('cartNumbers',productNumbers - cartItems[productName].inCart);
			
			//localStorage.setItem('totalCost', cartCost - (cartItems[producName].price * cartItems[productName].inCart));
			
			//delete cartItems(productName);
			//localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			
			//displayCart();
			//onLoadCartNumbers();
		});
	}
}
onLoadCartNumbers();
displayCart();
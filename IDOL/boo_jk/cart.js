
// for validate purpose (to check if email in session storage match local storage)
let user_email = JSON.parse(sessionStorage.getItem('userdata'));
let validate_email = JSON.parse(localStorage.getItem('formdata'))

const btn = document.getElementsByClassName('addToCart')
const btn2 = document.getElementsByClassName('addToCart1')

const products = []
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//Close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
    popbox.style.display = "none";
};

for(var i = 0; i < btn.length; i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener('click', () =>{
        let product = {
            email: user_email[0].email,
            image: event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].src,
            name: event.target.parentElement.parentElement.parentElement.children[0].children[0].textContent,
            price: event.target.parentElement.parentElement.parentElement.children[3].children[1].textContent,
            totalPrice: parseFloat(event.target.parentElement.parentElement.parentElement.children[3].children[1].textContent) ,
            quantity: 1
        }
        addItemToLocal(product)
    })
}

for(var i = 0; i < btn2.length; i++){
    let cartBtn2 = btn2[i]
    cartBtn2.addEventListener('click', () =>{
        let product = {
            email: user_email[0].email,
            image: event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src,
            name: event.target.parentElement.parentElement.parentElement.children[1].textContent,
            price: event.target.parentElement.parentElement.parentElement.children[3].textContent,
            totalPrice: parseFloat(event.target.parentElement.parentElement.parentElement.children[3].textContent) ,
            quantity: 1
        }
        addItemToLocal(product)
    })
}


function addItemToLocal(product){
let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
if(cartItem === null){
products.push(product)
localStorage.setItem('prdInCart', JSON.stringify(products))

}else{
    cartItem.forEach(item => {
        if(product.name == item.name){
            product.quantity = item.quantity += 1;
            product.totalPrice = item.totalPrice += product.totalPrice;
        }else{
            products.push(item)
        }
    });
    products.push(product)
}
localStorage.setItem('prdInCart', JSON.stringify(products))
window.location.reload()
}

function dispCartItem(){
    // check email
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    for (i = 0; i < cartItem.length; i++){
        if (user_email[0].email == cartItem[i].email){
            displayCart();
            
        }
    }
    

    
}
dispCartItem();

function displayCart(){
    // console.log(cartItem[0].email);
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    let html = '';
    cartItem.forEach(item => {
        html += `
            <div class="cartlist">
                <div class="forImage"> <img src="${item.image}" alt=""></div>
                <div class="forName"><p>${item.name}</p></div>
                <div class="forPrice"><p>${item.price}</p></div>
                <div class="forQuantity"><p>${item.quantity}</p></div>
                <div class="removeItem"><button>X</button></div>
            </div>
        `
    });
    document.querySelector('.cart-content').innerHTML = html;
}



const removeItem = document.getElementsByClassName('removeItem')
for(var i = 0; i < removeItem.length; i++){
    let removeBtn = removeItem[i]
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
        console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
        cartItem.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
                products.push(item) 
            }
        });
        localStorage.setItem('prdInCart', JSON.stringify(products))
        window.location.reload()
    })
}

function cartPrice(){
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.map(item =>{
    subTotal = item.totalPrice += subTotal;
    
        })
    subTotal =Math.round(subTotal * 100)/ 100
     console.log(subTotal);
     document.querySelector('.total-price').textContent = "RM" + subTotal
 }
 cartPrice()
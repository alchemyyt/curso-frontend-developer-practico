const email = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartDetails = document.querySelector('#product-cart-ctn');
const cardCtn = document.querySelector('.cards-container')
const productDetails = document.querySelector('#product-detail');
const productDetailsClose = document.querySelector('.product-detail-close');

function desactive(element) {
    let isElementClose = element.classList.contains('inactive')
    if (isElementClose === false) {
        element.classList.add('inactive')
    }
}
email.addEventListener('click',()=>{
    desactive(productDetails)
    desactive(shoppingCartDetails)
    menuDesktop.classList.toggle('inactive')

})
menuMobileIcon.addEventListener('click',()=>{
    desactive(productDetails)
    desactive(shoppingCartDetails)
    menuMobile.classList.toggle('inactive')
})
shoppingCart.addEventListener('click',()=>{
    desactive(menuDesktop)
    desactive(menuMobile)
    desactive(productDetails)
    shoppingCartDetails.classList.toggle('inactive')
})

class productCard {
    constructor(url , price, name){
        this.url = url,
        this.price = price,
        this.name = name
    }
}
let products = [];
products.push(new productCard ('https://cnnespanol.cnn.com/wp-content/uploads/2017/05/160927210830-tk-ah0927-exlarge-169.jpg?quality=100&strip=info&w=460&h=260&crop=1','20','pepo sad'));
products.push(new productCard ('https://c.tenor.com/9uUrb4sMaq8AAAAC/pepe-macara-pepe.gif','10','pepo mexican'));
products.push(new productCard ('https://media.tenor.com/omJbisofB98AAAAC/pepe-clown.gif','100','pepo clown'));
products.push(new productCard ('https://i.pinimg.com/474x/1a/1a/a4/1a1aa4f7453308656991a1e2d9f43e65--frog-meme-is-is.jpg','30','pepo women'));
products.push(new productCard ('https://c.tenor.com/8H9m5reho9AAAAAM/mlady-peepo.gif','200','pepo ma lady'));
products.push(new productCard ('https://cnnespanol.cnn.com/wp-content/uploads/2017/05/160927210830-tk-ah0927-exlarge-169.jpg?quality=100&strip=info&w=460&h=260&crop=1','20','pepo sad'));
products.push(new productCard ('https://c.tenor.com/9uUrb4sMaq8AAAAC/pepe-macara-pepe.gif','10','pepo mexican'));
products.push(new productCard ('https://media.tenor.com/omJbisofB98AAAAC/pepe-clown.gif','100','pepo clown'));
products.push(new productCard ('https://i.pinimg.com/474x/1a/1a/a4/1a1aa4f7453308656991a1e2d9f43e65--frog-meme-is-is.jpg','30','pepo women'));
products.push(new productCard ('https://c.tenor.com/8H9m5reho9AAAAAM/mlady-peepo.gif','200','pepo ma lady'));
products.push(new productCard ('https://cnnespanol.cnn.com/wp-content/uploads/2017/05/160927210830-tk-ah0927-exlarge-169.jpg?quality=100&strip=info&w=460&h=260&crop=1','20','pepo sad'));
products.push(new productCard ('https://c.tenor.com/9uUrb4sMaq8AAAAC/pepe-macara-pepe.gif','10','pepo mexican'));
products.push(new productCard ('https://media.tenor.com/omJbisofB98AAAAC/pepe-clown.gif','100','pepo clown'));
products.push(new productCard ('https://i.pinimg.com/474x/1a/1a/a4/1a1aa4f7453308656991a1e2d9f43e65--frog-meme-is-is.jpg','30','pepo women'));
products.push(new productCard ('https://c.tenor.com/8H9m5reho9AAAAAM/mlady-peepo.gif','200','pepo ma lady'));
console.log(products);
for (const iterator of products) {
    /*Hacer esto hace que pese mas el servidor porque recarga todo el elemento para crear uno nuevo
    let productCard =`
    <div class="product-card">
        <img src="${iterator.url}" alt="">
        <div class="product-info">
            <div class="">
                <p>$${iterator.price}</p>
                <p>${iterator.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>`;
    cardCtn.innerHTML+=productCard;
    */
    //Usamos esto porque crea nuevos elementos por separado y no tiene que recargar todo el contenedor
    const productCard = document.createElement('div');
    const img = document.createElement('img');
    const productInfo = document.createElement('div');
    const productInfoLeft = document.createElement('div');
    const price = document.createElement('p');
    const name = document.createElement('p');
    const iconCtn = document.createElement('figure');
    const icon = document.createElement('img');   
    productCard.classList.add('product-card');
    img.setAttribute('src',iterator.url);
    productInfo.classList.add('product-info');
    price.innerText='$' + iterator.price;
    name.innerText=iterator.name;
    cardCtn.appendChild(productCard);
    productCard.append(img,productInfo);
    productInfo.append(productInfoLeft,iconCtn);
    productInfoLeft.append(price,name);
    iconCtn.appendChild(icon);
    icon.setAttribute('src','./icons/bt_add_to_cart.svg');
    img.addEventListener('click',()=>{
        desactive(shoppingCartDetails)
        desactive(menuDesktop)
        desactive(menuMobile)
        productDetails.classList.toggle('inactive')

})
    productDetailsClose.addEventListener('click',()=>{
        productDetails.classList.add('inactive')
    })
}


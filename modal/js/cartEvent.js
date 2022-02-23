
// click mở khung cart
function openModalCart() {
    const navCart = $('.nav__cart');
    const modal = $('.modal');
    const modalCart = $('.modal__cart');

    navCart.onclick = function () {
        modal.style.display = 'flex';
        modalCart.classList.add('active');
    }
}

openModalCart();


// event của modal cart và trang cartpage 



function CartPageEmpty() {
    return `    <div class="cartList__Empty">
                    <div class="empty__logo">
                        <i class="fas fa-shopping-bag"></i>
                
                    </div>
                    <h2>GIỎ HÀNG CỦA BẠN ĐANG TRỐNG</h2>
                    <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                    
                    <p>Bạn sẽ tìm thấy rất nhiều món bánh ngon ở cửa hàng chúng tôi.</p>
                    <button>
                        <a href="/orderPage/orderPage.html">XEM ĐƠN HÀNG</a>
                    </button>
                    <button>
                        <a href="">TIẾP TỤC MUA HÀNG</a>
                    </button>
                </div>`;
}

function ProductItemCartModel(product) {
    return `
        <li class="modal__cart-product-item">
            <div class="modal__cart-delete-icon">
                    <i class="far fa-times-circle deleteIcon" data-id = "${product.id}"></i>
            </div>

            <div class="modal__cart-imgbox">
                <img class="modal__cart-img" src="${product.img}" alt="">
            </div>
        <div class="modal__cart-item-infor">
            <h3 class="modal__cart-item-name">${product.name}</h3>
            <span class="modal__cart-item-price">${product.sale}đ</span>
            <div class="modal__cart-item-input">
                <button class="cart__item-decrement"  data-id = "${product.id}">-</button>
                <input type="number" min="1" max="9999" step="1" value="${product.quantity}" class="cart_item-input" data-id = "${product.id}" inputmode="numeric">
                <button class="cart__item-increment" data-id = "${product.id}">+</button>
            </div>       
        </div>
    </li>
    `;
}

function ProductItemCartPage(product) {
    return `
        <div class="cartPage__product">
        <div class="cartPage__product-item">
            <div class="cartPage__product-imgBox">
                <img class="cartPage__product-img" src="${product.img}" alt="">
            </div>

            <div class="cartPage__product-item-infor">
                <h3 class="cartPage__product-name">
                    ${product.name}
                </h3>
            
                <div class="modal__cart-delete-icon">
                    <i class="far fa-times-circle deleteIcon" data-id = "${product.id}"></i>
                </div>
            </div>
        </div>
        <div class="cartPage__product-item-price">
            <span class="cartPage__product-cost">${product.sale}đ</span>
        </div>
        <div class="cartPage__item-input">                           
            <div class="modal__cart-item-input">
                <button class="cart__item-decrement"  data-id = "${product.id}">-</button>
                <input type="number" min="1" max="9999" step="1" value="${product.quantity}" class="cart_item-input" data-id = "${product.id}"  inputmode="numeric">
                <button class="cart__item-increment" data-id = "${product.id}">+</button>
            </div>
        </div>                             
        <div class = "cartPage__product-total">
            <span class="cartPage__product-total-cost">${product.sale * product.quantity}đ</span>
        </div>
    </div>
    `;
}

function getProductInCart() {
    return JSON.parse(localStorage.getItem('productsInShoppingCart'));
}

function updateProductInCart(productInCart) {
    localStorage.setItem('productsInShoppingCart', JSON.stringify(productInCart));
    renderProductCart.CartModel();
    renderProductCart.CartPage();
    $('.nav__cart-notice').innerText = `${productInCart.length}`;
    //renderComponentNavbar.amountCart(); // tăng số trên cart
}

function productTotalPrice() {
    let productsInCart = getProductInCart();
    let sumPrice = 0;
    productsInCart.forEach((product) => {
        sumPrice += product.sale * product.quantity;
    });
    return sumPrice;
}

function AddProductInCart(product, quantity = 1) {
    let productToCart = {
        id: product.id,
        name: product.name,
        category: product.category,
        img: product.img,
        quantity:  parseInt(quantity), // parseInt(inputQuantity.value)
        sale: +product.sale,
    };

    let productsInCart = getProductInCart();

    let isExist = false;
    for (let product of productsInCart) {
        if (product.id == productToCart.id) {
            isExist = true;
            product.quantity += productToCart.quantity; //1
        }
    }

    if (!isExist) {
        productsInCart.push(productToCart);
    }

    updateProductInCart(productsInCart);
}


if(!getProductInCart())
localStorage.setItem('productsInShoppingCart',JSON.stringify([]));

const renderProductCart = {
    CartModel() {
        let productsInCart = getProductInCart();

        if (productsInCart.length <= 0) {
            $('.modal__cart-footer').style.display = 'none';
            $('.modal__cart-product-box').innerHTML = `
                <div class = "modal__cart-empty">
                    <i class="fas fa-shopping-cart"></i>
                    <h4 class="modal__cart-empty-text">Chưa có sản phẩm nào trong giỏ hàng</h4>
              </div>
              `
            $('.modal__cart-subtotal-all').innerHTML = '';
            return;
        }

        let productlist = productsInCart.map((product) => {
            return ProductItemCartModel(product);
        });

        $('.modal__cart-product-box').innerHTML = productlist.join('');
        $('.modal__cart-footer').style.display = 'block';
        $('.modal__cart-subtotal-all').innerHTML = `${productTotalPrice()}đ`;
    },

    CartPage() {
        if($('#cartPage .product-box')) {
            let productsInCart = getProductInCart();

            if (productsInCart.length <= 0) {
                $('.cartPage__product-header').style.display = 'none';
                $('#cartPage .cartPage-footer').style.display = 'none';
                $('#cartPage .product-box').innerHTML = CartPageEmpty();
                $('.cartPage__Subtotal-number').innerHTML = '';
                return;
            }

            let productlist = productsInCart.map((product) => {
                return ProductItemCartPage(product);
            });

            $('#cartPage .product-box').innerHTML = productlist.join('');
            $('#cartPage .cartPage-footer').style.display = 'flex';
            $('.cartPage__Subtotal-number').innerHTML = `${productTotalPrice()}đ`;
        }
    },
};

// =============================================






// =============> EVENT <==================
const eventCart = {
    btnCart(e) {
        let isPlus = e.target.classList.contains('cart__item-increment'); // gán dấu + bằng nơi xảy ra sự kiện mà có class là cart__item-increment
        let isMinus = e.target.classList.contains('cart__item-decrement');
        let isDelete = e.target.classList.contains('deleteIcon');
        let cartItemInput = $$('.cart_item-input');   
        let productsInCart = getProductInCart();

        if (isPlus || isMinus) {
            let Input, newValue, value, max;

            for (let i = 0; i < productsInCart.length; i++) {
                if (productsInCart[i].id == e.target.dataset.id) {
                    Input = cartItemInput[i];
                    max = Input.max;
                    value = Input.value;

                    if (isPlus) {
                        newValue = parseInt(value) + 1;
                        if (newValue <= max) {
                            Input.value = newValue;
                            productsInCart[i].quantity = parseInt(Input.value);
                        }
                    } else if (isMinus) {
                       
                        newValue = parseInt(value) - 1;
                        Input.value = newValue;
                        productsInCart[i].quantity = parseInt(Input.value);
                    }

                    // productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].quantity;
                }

                if (productsInCart[i].quantity < 1) {
                    productsInCart.splice(i, 1);
                }
            }

            if (newValue <= max) {
                updateProductInCart(productsInCart);
            }
        }
        console.log(isDelete);
        if (isDelete) {
            for (let i = 0; i < productsInCart.length; i++) {
                if (productsInCart[i].id == e.target.dataset.id) {
                    productsInCart.splice(i, 1);
                }
            }
            updateProductInCart(productsInCart);
        }
    },

    inputOnBlur() {
        let productsInCart = getProductInCart();
        let cartItemInput = $$('.cart_item-input');

        cartItemInput.forEach((input) => {
            input.onblur = () => {

                if (Number(input.value) <= Number(input.max)) {
                    productsInCart.forEach((product) => {
                      
                        if (product.id == input.dataset.id) {
                            product.quantity = Number(input.value);
                            // product.price = product.basePrice * product.quantity;
                        }

                    });
                }

                updateProductInCart(productsInCart);
            };
        });
    },

    btnCartModal() {
        $('.modal__cart-product-box').addEventListener('click', (e) => {
            this.btnCart(e); 
            this.inputOnBlur(); 
        });

        
    },

    btnCartPage() {
        if($('#cartPage .product-box')) {
            $('#cartPage .product-box').addEventListener('click', (e) => {
                this.btnCart(e);
                this.inputOnBlur();
            });
        }
    },

    btnCheckoutCartPage () {
        if(($('.cartPage__Checkout'))) {
            $('.cartPage__Checkout').addEventListener('click',(e) => {
                let userCurrent = UserModel.getUserCurrent();
                let productsInCarts = getProductInCart();
                let Bill = {
                    username: userCurrent.username,
                    products: productsInCarts,
                    subtotal: productTotalPrice(),
                    date: Date.now(),
                }

                userCurrent.cart = [];
                UserModel.updateUserCurrent(userCurrent);
                BillModel.insertBill(Bill);
                updateProductInCart([]);
                $('.nav__cart-notice').innerText = '0';

                $('.notification-description').innerText = 'Quý khách đã thanh toán thành công !!!';
                $('.modal').style.display = 'flex';
                $('.modal__notification-box').style.display = 'flex';
            })
        }
    },

    init() {
        eventCart.btnCartModal()
       //  eventCart.btnViewCartModal()
    }
};

// =============================================


renderProductCart.CartModel();
renderProductCart.CartPage();
eventCart.init(); 
eventCart.btnCartPage();

eventCart.btnCheckoutCartPage();

function AddToCart() {
   let inputQuantity = $('.inputQuantity');
    $$('.addToCart').forEach((item, index) => {
        item.onclick = () => {
            let userCurrent = UserModel.getUserCurrent();
            if(userCurrent == null) {
                $('.modal').style.display = 'flex';
                $('.modal__notification-box').style.display = 'flex';
                $('.modal__notification-box .notification-description').innerText = 'Xin quý khách vui lòng đăng nhập !!!';
                return;
            } 

            let id = item.dataset.id;
            console.log(id);
            let product;
            if(inputQuantity) {
                product = ProductModel.getAll().filter((product) => product.id == id && product.id == inputQuantity.dataset.id)[0]; //&& product.id == inputQuantity.dataset.id
                AddProductInCart(product, inputQuantity.value); ///, inputQuantity
            }
            else{ product = ProductModel.getAll().filter((product) => product.id == id)[0]; //&& product.id == inputQuantity.dataset.id
                AddProductInCart(product);
            }

        };
    });
}

AddToCart();

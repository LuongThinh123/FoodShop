
function orderPageRender() {
    if($('.orderPage') == null) return;
    let userCurrent = UserModel.getUserCurrent();

    if(userCurrent == null)  $('.orderPage').innerHTML = `
        <div class = "orderPage-empty">
            <i class="fas fa-file-invoice-dollar"></i>
            <h4 class="orderPage-empty-text">Chưa có đơn hàng nào</h4>
            <button>
                <a href="/index.html">VỀ TRANG CHỦ</a>
            </button>
            <button>
                <a href="/shop/shop.html">TIẾP TỤC MUA HÀNG</a>
            </button>
        </div>`;
    else {
        let billList = BillModel.getAll().filter(function(bill) {
            return bill.username == userCurrent.username;
        })

        if(billList == '')  $('.orderPage').innerHTML = `
        <div class = "orderPage-empty">
            <i class="fas fa-file-invoice-dollar"></i>
            <h4 class="orderPage-empty-text">Chưa có đơn hàng nào</h4>
            <button>
                <a href="/index.html">VỀ TRANG CHỦ</a>
            </button>
            <button>
                <a href="/shop/shop.html">TIẾP TỤC MUA HÀNG</a>
            </button>
        </div>`;
    
        console.log(billList)
        let htmls;
        billList.forEach( function (bill,index) {
            $('.orderPage').insertAdjacentHTML('beforeEnd', `    
                <div class="orderlist__box">
                <div class="order__heading">
                    <div class="order__header-title">SẢN PHẨM</div>
                    <div class="order__header-price">GIÁ</div>
                    <div class="order__header-quantity">SỐ LƯỢNG</div>
                    <div class="order__header-total">THÀNH TIỀN</div>
                </div>
            
                <div class="order__box id-bill-${index}">
                
                </div>

                <div class="orderFooter">
                    <p>NGÀY ĐẶT HÀNG : ${dateTime(bill.date)}</p>
                    <h2>TỔNG TIỀN : ${bill.subtotal}đ</h2>
                </div>
            </div>
            `) 
            
            htmls =  bill.products.map( function (product) {
                return `
                <div class="order__product">
                        <div class="order__product-item">
                            <div class="order__product-imgBox">
                                <img class="order__product-img" src="${product.img}" alt="">
                            </div>
                            <div class="order__product-item-infor">
                                <h3 class="order__product-name">${product.name}</h3>
                            </div>
                        </div>

                        <div class="order__product-item-price">
                            <span class = "order__product-cost">${product.sale}đ</span>
                        </div>

                        <div class="order__product-item-quantity">
                            <span class = "order__product-quantity">${product.quantity}</span>
                        </div>

                        <div class="order__product-item-total">
                            <span class = "order__product-total-cost">${product.sale * product.quantity}đ</span>
                        </div>
                </div>
            `
            })
            $(`.order__box.id-bill-${index}`).innerHTML =  htmls.join('');
        })
    }

}

orderPageRender();


function dateTime(date) {
    let d = new Date(date)
    return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + " " 
}
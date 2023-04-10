var timeSale = new Date().getTime() + 3 * 60 * 60 * 1000;
// Hàm hiển thị thời gian đếm ngược
function ShowTime() {
  var hourse = document.querySelector(".hourse");
  var minutes = document.querySelector(".minutes");
  var seconds = document.querySelector(".seconds");
  var date = new Date().getTime();
  var sale = Math.ceil(timeSale - date);
  var hourseSale = Math.floor(sale / 1000 / 60 / 60);
  var minutesSale = Math.floor((sale / 1000 / 60) % 60);
  var secondsSale = Math.floor((sale / 1000) % 60);
  if (hourseSale < 10) {
    hourseSale = `0${hourseSale}`;
  }
  hourse.innerText = hourseSale;
  if (minutesSale < 10) {
    minutesSale = `0${minutesSale}`;
  }
  minutes.innerText = minutesSale;
  if (secondsSale < 10) {
    secondsSale = `0${secondsSale}`;
  }
  seconds.innerText = secondsSale;
  if (sale < 0) {
    hourse.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}
setInterval(ShowTime, 1000);
var displayProducts1 = document.querySelector(".products_page1");
var displayProducts2 = document.querySelector(".products_page2");
var displayProducts3 = document.querySelector(".products_page3");
var activeProducs1 = document.querySelector(".group_products1");
var activeProducs2 = document.querySelector(".group_products2");
var activeProducs3 = document.querySelector(".group_products3");
// Hàm hiển thị sản phẩm theo tiêu đề
function shows1() {
  var test = document.querySelector(".group_products1");
  displayProducts1.style.display = "flex";
  displayProducts2.style.display = "none";
  displayProducts3.style.display = "none";
  activeProducs1.classList.add("avtive");
  activeProducs2.classList.remove("avtive");
  activeProducs3.classList.remove("avtive");
}
// Hàm hiển thị sản phẩm theo tiêu đề
function shows2() {
  var test = document.querySelector(".group_products1");
  displayProducts1.style.display = "none";
  displayProducts2.style.display = "flex";
  displayProducts3.style.display = "none";
  activeProducs2.classList.add("avtive");
  activeProducs1.classList.remove("avtive");
  activeProducs3.classList.remove("avtive");
}
// Hàm hiển thị sản phẩm theo tiêu đề
function shows3() {
  var test = document.querySelector(".group_products1");
  displayProducts1.style.display = "none";
  displayProducts2.style.display = "none";
  displayProducts3.style.display = "flex";
  activeProducs3.classList.add("avtive");
  activeProducs2.classList.remove("avtive");
  activeProducs1.classList.remove("avtive");
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// Hàm hiển thị banner
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// Hàm hiển thị thông báo và kiểm tra các value trong form ở footer
function showNotification() {
  // Lấy value SDT để kt đúng định dạng hay kh
  var lengthPhone = document.querySelector(".formPhone").value;
  var valueEmail = document.querySelector(".formMail").value;
  var notification = document.querySelector(".notification");
  var notificationMail = document.querySelector(".notificationMail");
  var notificationPhone = document.querySelector(".notificationPhone");
  notificationPhone.style.display = "none";
  notificationMail.style.display = "none";
  notification.style.display = "none";
  var notiPhone = false;
  var notiMail = true;
  // Vị trí @
  var atposition = valueEmail.indexOf("@");
  // Vị trí cuối cùng của "."
  var dotposition = valueEmail.lastIndexOf(".");
  // Nếu vị trí @ < 1 hoặc
  // vị trí cuối của "." < vị trí @ +2 hoặc
  // vị trí cuối của "." + 2 >= độ dài của mail
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= valueEmail.length
  ) {
    notificationMail.style.display = "block";
    notiMail = false;
  }
  if (lengthPhone.length != 10) {
    notificationPhone.style.display = "block";
  } else {
    notiPhone = true;
  }
  if (notiPhone == true && notiMail == true) {
    notification.style.display = "block";
    document.querySelector(".formPhone").value = "";
    document.querySelector(".formMail").value = "";
    document.querySelector(".name_input").value = "";
    document.querySelector(".textarea").value = "";
    document.querySelector(".local_input").value = "";
  }
}

var number_products = document.querySelector(".number_products");
var count = 0;
// Hàm hiển thị số lượng sản phẩm đã thêm ở cart
function add_cart() {
  count++;
  number_products.innerHTML = count;
}
var count_cart = document.getElementsByClassName("add_cart");
for (let i = 0; i < count_cart.length; i++) {
  count_cart[i].addEventListener("click", add_cart);
}
var element = document.getElementsByClassName("heart_products");
for (let i = 0; i < element.length; i++) {
  // Hàm thêm class 'heart_red' và chuyển thành màu đỏ
  element[i].onclick = function () {
    console.log(i);
    var btn_heart = document.querySelectorAll(".heart_test");
    btn_heart[i].classList.toggle("heart_red");
  };
}
var btn_login = document.querySelector(".btn_login");
var hidenForm = document.querySelector(".login-container");
// Hàm hiển thị form Login khi nhần vào 'ĐĂNG NHẬP'
btn_login.addEventListener("click", function () {
  hidenForm.classList.toggle("hiden_form");
});
var fa_xmark = document.querySelector(".fa-xmark");
// Hàm ẩn form Login khi nhấn vào dấu 'x' trên form Login
fa_xmark.addEventListener("click", function () {
  hidenForm.classList.toggle("hiden_form");
});
var box_products = document.getElementsByClassName("box_products");
for (let i = 0; i < box_products.length; i++) {
  // Hàm thực hiện di chuyển product lên 10px và đổ bóng khi hover vào
  box_products[i].addEventListener("mouseover", function () {
    box_products[i].style.transform = "translateY(-10px)";
    box_products[i].style.transition = "all 0.3s";
    box_products[i].style.boxShadow = "0  20px  20px  0px  rgb(183, 167, 167)";
  });
  // Hàm thực hiện di chuyển product xuống 10px và huỷ đổ bóng khi bỏ hover vào
  box_products[i].addEventListener("mouseout", function () {
    box_products[i].style.transform = "translateY(10px)";
    box_products[i].style.boxShadow = "";
  });
}
document.querySelector(".avt").style.display = "none";
document.querySelector(".admin").style.display = "none";
document.querySelector(".notify_login").style.display = "none";
// Hàm kiểm tra nếu value của Username = 'admin' và Password = '123' thì thực hiện login thành công
document.querySelector("#submit").addEventListener("click", function () {
  var userValue = document.querySelector("#username").value;
  var passValue = document.querySelector("#password").value;
  if (userValue === "admin" && passValue === "123") {
    btn_login.style.display = "none";
    hidenForm.classList.toggle("hiden_form");
    document.querySelector(".avt").style.display = "block";
    document.querySelector(".admin").style.display = "block";
  } else {
    // Login không thành công sẽ hiển thị thông báo
    document.querySelector(".notify_login").style.display = "block";
  }
});
var showCart = document.querySelector(".showCart");
var shopping = document.querySelector(".shopping");
// Hiển thị danh sách sản phẩm đã thêm khi hover vào giỏ hàng
shopping.addEventListener("mouseover", function () {
  showCart.style.display = "block";
});
// Ẩn danh sách sản phẩm đã thêm khi bỏ hover vào giỏ hàng
shopping.addEventListener("mouseout", function () {
  showCart.style.display = "none";
});
var imgReview = document.getElementsByClassName("imgReview");
for (let i = 0; i < imgReview.length; i++) {
  // Thực hiện di chuyển class 'imgReview' lên 10px và đổ bóng
  imgReview[i].addEventListener("mouseover", function () {
    imgReview[i].style.transition = "all 0.2s";
    imgReview[i].style.boxShadow = "0 0 30px white";
    imgReview[i].style.transform = "translateY(-10px)";
  });
  // Di chuyển class 'imgReview' xuống 10px mà huỷ bỏ đổ bóng
  imgReview[i].addEventListener("mouseout", function () {
    imgReview[i].style.transform = "translateY(10px)";

    imgReview[i].style.boxShadow = "";
  });
}

var btnAddCart = document.getElementsByClassName("add_cart");
for (let i = 0; i < btnAddCart.length; i++) {
  btnAddCart[i].addEventListener("click", showSuccessToast);
}
function showSuccessToast() {
  toast({
    title: "",
    message: "",
    type: "",
  });
}
// Toast function
function toast({ title = "", message = "", type = "info" }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, 3000);
    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    toast.classList.add("toast", "toast--success");
    toast.style.animation = `slideInLeft ease .5s, fadeOut linear 1s 1.5s forwards`;
    toast.innerHTML = `
                <div class="toast__icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">Thành công!</h3>
                    <p class="toast__msg">Thêm vào giỏ hàng thành công.</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
            `;
    main.appendChild(toast);
  }
}

var totalPrice = 0;

function countPrice() {}
function addCartContent() {
  for (let i = 0; i < btnAddCart.length; i++) {
    btnAddCart[i].addEventListener("click", function () {
      // Thẻ box_products
      var indexBoxProducts = box_products[i];
      // Giá
      var priceAddCart = indexBoxProducts
        .querySelector(".price_products")
        .innerText.replace("đ", "");
      // Tên
      var nameProducts =
        indexBoxProducts.querySelector(".name_products").innerText;
      var imgProducts = indexBoxProducts.querySelector(".img_products img").src;
      var splitArrayPrice = priceAddCart.split(" ");
      console.log(splitArrayPrice);
      var ArrayPricelength = splitArrayPrice.length;
      if (ArrayPricelength == 2) {
        var PriceAfter = splitArrayPrice[1].replace("đ", "");
      } else {
        var PriceAfter = splitArrayPrice.toString();
      }
      console.log(PriceAfter);
      var num = parseFloat(PriceAfter.replaceAll(".", ""));
      totalPrice += num;
      console.log(totalPrice);
      var showPriceString =
        totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
      console.log(showPriceString);

      document.querySelector(".priceCheckOut").innerHTML = showPriceString;
      const html = `
      <li>
        <div class="imgTitle">
          <img src="${imgProducts}" alt="" />
          <div>${nameProducts}</div>
        </div>
      </li>
      <li>
        <div class="priceProductsShow">${PriceAfter} đ</div>
      </li>`;
      const node = document.createElement("ul");
      node.innerHTML = html;
      var list = document.querySelector(".listProductsShow");
      document.querySelector(".notifyNoProducts").style.display = "none";
      list.insertBefore(node, list.firstChild);
    });
  }
}
addCartContent();

// Ngăn chặn load lại trang khi nhấn nút 'Thanh toán'
const myButton = document.querySelector(".check");
myButton.addEventListener("click", function (event) {
  // Ngăn chặn hành động mặc định của nút
  event.preventDefault();
});

var slideContainer = document.querySelector(".slide-container");

window.addEventListener("scroll", function () {
  var nav_menu = document.querySelector(".nav_menu");
  if (window.pageYOffset >= 105) {
    nav_menu.classList.add("fixed-menu");
    var fixedmenu = document.querySelector(".fixed-menu");
    slideContainer.style.paddingTop = "66px";
  } else {
    nav_menu.classList.remove("fixed-menu");
    slideContainer.style.paddingTop = "0px";
  }
});

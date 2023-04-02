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
  console.log(displayProducts3);
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
  console.log(displayProducts3);
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
  console.log(displayProducts3);
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
var count_cart = document.querySelector(".add_cart");
var number_products = document.querySelector(".number_products");
var count = 0;
// Hàm hiển thị số lượng sản phẩm đã thêm ở cart
function add_cart() {
  count++;
  number_products.innerHTML = count;
  console.log(count);
}

var element = document.getElementsByClassName("heart_products");
for (let i = 0; i < element.length; i++) {
  // Hàm thêm class 'heart_red' và chuyển thành màu đỏ
  element[i].onclick = function () {
    console.log(i);
    var btn_heart = document.querySelectorAll(".heart_test");
    btn_heart[i].classList.toggle("heart_red");
    console.log(btn_heart);
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
    console.log(typeof userValue);
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

// count_cart.addEventListener("click", showSuccessToast)
var btnAddCart = document.getElementsByClassName("add_cart");
for (let i = 0; i < btnAddCart.length; i++) {
  btnAddCart[i].addEventListener("click", showSuccessToast);
}
function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Thêm vào giỏ hàng thành công.",
    type: "success",
    duration: 5000,
  });
}
// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "fas fa-check-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
            `;
    main.appendChild(toast);
  }
}

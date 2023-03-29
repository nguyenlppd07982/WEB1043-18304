function ShowTime() {
    var hourse = document.querySelector('.hourse')
    var minutes = document.querySelector('.minutes')
    var seconds = document.querySelector('.seconds')
    var date = new Date()
    var monthNow = date.getMonth()+1
    var dayNow = date.getDate()
    var yearNow = date.getFullYear()
    var timeSale = new Date(`${monthNow} ${dayNow+1} ${yearNow} 00:00:00`)
    var sale = timeSale-date
    var hourseSale = Math.ceil(sale / 1000 /60 /60);
    var minutesSale = Math.ceil(sale / 1000 /60 %60);
    var secondsSale = Math.ceil(sale / 1000 %60);
    hourse.innerText = hourseSale
    if(minutesSale < 10 ){
        minutesSale = `0${minutesSale}`
    }
    minutes.innerText = minutesSale
    if(secondsSale < 10 ){
        secondsSale = `0${secondsSale}`
    } 
    seconds.innerText = secondsSale
}
    setInterval(ShowTime,1000)
var displayProducts1 = document.querySelector('.products_page1')
var displayProducts2 = document.querySelector('.products_page2')
var displayProducts3 = document.querySelector('.products_page3')
var activeProducs1 = document.querySelector('.group_products1')
var activeProducs2 = document.querySelector('.group_products2')
var activeProducs3 = document.querySelector('.group_products3')
function shows1() {
    var test = document.querySelector('.group_products1')
    console.log(displayProducts3);
    displayProducts1.style.display = 'flex'
    displayProducts2.style.display = 'none'
    displayProducts3.style.display = 'none'
    activeProducs1.classList.add("avtive")
    activeProducs2.classList.remove("avtive")
    activeProducs3.classList.remove("avtive")
}
function shows2() {
    var test = document.querySelector('.group_products1')
    console.log(displayProducts3);
    displayProducts1.style.display = 'none'
    displayProducts2.style.display = 'flex'
    displayProducts3.style.display = 'none'
    activeProducs2.classList.add("avtive")
    activeProducs1.classList.remove("avtive")
    activeProducs3.classList.remove("avtive")
}
function shows3() {
    var test = document.querySelector('.group_products1')
    console.log(displayProducts3);
    displayProducts1.style.display = 'none'
    displayProducts2.style.display = 'none'
    displayProducts3.style.display = 'flex'
    activeProducs3.classList.add("avtive")
    activeProducs2.classList.remove("avtive")
    activeProducs1.classList.remove("avtive")
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function showNotification(){
    // Lấy value SDT để kt đúng định dạng hay kh
    var lengthPhone = document.querySelector('.formPhone').value;
    var valueEmail = document.querySelector('.formMail').value;
    
    var notification = document.querySelector('.notification');
    var notificationMail = document.querySelector('.notificationMail');
    var notificationPhone = document.querySelector('.notificationPhone');
    notificationPhone.style.display = 'none';
    notificationMail.style.display = 'none';
    notification.style.display = 'none';
    var notiPhone = false
    var notiMail = true
    // Vị trí @
    var atposition = valueEmail.indexOf("@");
    // Vị trí cuối cùng của "."
    var dotposition = valueEmail.lastIndexOf(".");
    // Nếu vị trí @ < 1 hoặc 
    // vị trí cuối của "." < vị trí @ +2 hoặc 
    // vị trí cuối của "." + 2 >= độ dài của mail
    if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= valueEmail.length) {
        notificationMail.style.display = 'block';
        notiMail = false;
    }
    if(lengthPhone.length != 10 ){
        notificationPhone.style.display = 'block';
    } else{
        notiPhone = true
    }
    if(notiPhone == true && notiMail == true){
        notification.style.display = "block";
    }

}
var count_cart = document.querySelector(".add_cart")
var number_products = document.querySelector('.number_products')
var count = 0;

function add_cart(){
    count++;
    number_products.innerHTML = count;
    console.log(count)
}
// count_cart.addEventListener("click",add_cart)
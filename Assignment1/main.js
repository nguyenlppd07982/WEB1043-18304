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


function next(){
    var test = document.querySelector('.banner')
    console.log(test);
    test.removeAttribute("background-image" )
    test.setAttribute("style" , "background-image: url(./slide-bg-1.jpg);")
}

function back(){
    var test = document.querySelector('.banner')
    console.log(test);
    test.removeAttribute("background-image" )

    test.setAttribute("style" , "background-image: url(./slide-bg-2.jpg);")
    
}
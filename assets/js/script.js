// đặt biến
const menuShop = document.querySelector(".menu-shop")
menuShop.addEventListener("click", function(){
    menuShop.classList.toggle("active")
    //toggle: nhấp hiện 1 class active và ngược lại
    document.querySelector(".menu-items").classList.toggle("active")
})
// chuyển động màn hình - scroll
const topX2 = document.querySelector(".top")
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    if(x > 80){
        topX2.classList.add("active");
    }
    else{
        topX2.classList.remove("active")
    }
})
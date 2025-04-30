function Checkcoupon (){
    let couponCode = document.getElementById("text-input").value.trim();
    let couponCode2 = document.getElementById("text-content").value.trim();
    let result = document.getElementById("result");
if(couponCode === couponCode2 ){
    result.textContent = "coupon code matched";
    result.style.bgcolor = "green";
}
else {
    result.textContent = "Incorrect code";
    result.style.bgcolor = "Red"
}
}

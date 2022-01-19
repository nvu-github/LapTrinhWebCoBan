var dateObject = new Date();
const day = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();
const arrthu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
let thu = arrthu[dateObject.getDay()];
document.getElementById("nowday").innerText = `${thu}, ${day}/${month}/${year}`;

const menu = document.getElementById("menu");
const locationTop = menu.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset >= locationTop){
        menu.classList.add("menuTop");
    } else {
        menu.classList.remove("menuTop");
    }
}
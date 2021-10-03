const messageBox = document.querySelector(".message__box");
const composeBtn = document.querySelector(".sidebar__compose");
const closeBtn = document.querySelector("#close-btn");

messageBox.style.display = "none";

composeBtn.addEventListener("click",(e) => {
    e.preventDefault();
    messageBox.style.display = "block";
});

closeBtn.addEventListener("click",(e) => {
    messageBox.style.display = "none";
})


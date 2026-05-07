const btn = document.getElementById("lang-btn");
const menu = document.getElementById("lang-menu");

btn.onclick = () => {
  menu.classList.toggle("hidden");
};

document.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

function changeLang(lang) {
  alert("Bạn chọn: " + lang);
}
const items = document.querySelectorAll(".bovien");
const lastItem = items[items.length - 1]; // cái "Tất cả các mục"
const dropdown = lastItem.querySelector(".dropdown");

lastItem.onclick = (e) => {
  e.stopPropagation();
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
};

document.addEventListener("click", () => {
  dropdown.style.display = "none";
});

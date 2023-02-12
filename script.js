function required() {
  alert("Data submitted Successfully");
  return true;
}

const togglebutton = document.getElementById("togglebutton");
const naviList = document.getElementById("navs");

togglebutton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});

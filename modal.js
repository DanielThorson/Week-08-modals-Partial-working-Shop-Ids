// Modal code
var subpagesModal = document.querySelector("#subpages-modal");
var modal = document.querySelector(".modal");
var modalSubPagesBtn = document.querySelector(".Subpages-modal-btn");
var modalSubPagesBtn2 = document.querySelector(".Subpages-modal-btn2");
var modalSubPagesBtn3 = document.querySelector(".Subpages-modal-btn3");
var modalSubPagesBtn4 = document.querySelector(".Subpages-modal-btn4");
var modalSubPagesBtn5 = document.querySelector(".Subpages-modal-btn5");
var modalSubPagesBtn6 = document.querySelector(".Subpages-modal-btn6");


// function to open Create Donut Shop
modalSubPagesBtn.addEventListener("click", openModal2);
function openModal2() {
  shopModal.style.display = "block";
}
// Function to hide Main Menu
modalSubPagesBtn.addEventListener("click", hideModal2);
function hideModal2() {
  modal.style.display = "none";
}

// function to open Create New Donut
modalSubPagesBtn2.addEventListener("click", openModal3);
function openModal3() {
  donutModal.style.display = "block";
}
// Function to hide Main Menu
modalSubPagesBtn2.addEventListener("click", hideModal3);
function hideModal3() {
  modal.style.display = "none";
}

// function to open Add Inventory
modalSubPagesBtn3.addEventListener("click", openModal4);
function openModal4() {
  addModal.style.display = "block";
}
// Function to hide Main Menu
modalSubPagesBtn3.addEventListener("click", hideModal4);
function hideModal4() {
  modal.style.display = "none";
}

// function to open Print Inventory
modalSubPagesBtn4.addEventListener("click", openModal5);
function openModal5() {
  invModal.style.display = "block";
}
// Function to hide Main Menu
modalSubPagesBtn4.addEventListener("click", hideModal5);
function hideModal5() {
  modal.style.display = "none";
}

// function to open Print Revenue
modalSubPagesBtn5.addEventListener("click", openModal6);
function openModal6() {
  revModal.style.display = "block";
}
// Function to hide Main Menu
modalSubPagesBtn5.addEventListener("click", hideModal6);
function hideModal6() {
  modal.style.display = "none";
}

// function to open Place Order
modalSubPagesBtn6.addEventListener("click", openModal7);
function openModal7() {
  ordModal.style.display = "block";
}
// Function to hide Main Menu
modalSubPagesBtn6.addEventListener("click", hideModal7);
function hideModal7() {
  modal.style.display = "none";
}


var menuModal = document.querySelector("#menu-modal");
var shopModal = document.querySelector(".smodal");
var donutModal = document.querySelector(".dmodal");
var addModal = document.querySelector(".amodal");
var invModal = document.querySelector(".imodal");
var revModal = document.querySelector(".rmodal");
var ordModal = document.querySelector(".omodal");
var modalMenuBtn = document.querySelector(".Main-Menu-modal-btn");
var modalMenuBtn2 = document.querySelector(".Main-Menu-modal-btn2");
var modalMenuBtn3 = document.querySelector(".Main-Menu-modal-btn3");
var modalMenuBtn4 = document.querySelector(".Main-Menu-modal-btn4");
var modalMenuBtn5 = document.querySelector(".Main-Menu-modal-btn5");
var modalMenuBtn6 = document.querySelector(".Main-Menu-modal-btn6");

modalMenuBtn.addEventListener("click", openModal);
function openModal() {
  modal.style.display = "block";
}

modalMenuBtn.addEventListener("click", hideModal);
function hideModal() {
  shopModal.style.display = "none";
}

modalMenuBtn2.addEventListener("click", openModal22);
function openModal22() {
  modal.style.display = "block";
}

modalMenuBtn2.addEventListener("click", hideModal22);
function hideModal22() {
  donutModal.style.display = "none";
}

modalMenuBtn3.addEventListener("click", openModal33);
function openModal33() {
  modal.style.display = "block";
}

modalMenuBtn3.addEventListener("click", hideModal33);
function hideModal33() {
  addModal.style.display = "none";
}

modalMenuBtn4.addEventListener("click", openModal44);
function openModal44() {
  modal.style.display = "block";
}

modalMenuBtn4.addEventListener("click", hideModal44);
function hideModal44() {
  invModal.style.display = "none";
}

modalMenuBtn5.addEventListener("click", openModal55);
function openModal55() {
  modal.style.display = "block";
}

modalMenuBtn5.addEventListener("click", hideModal55);
function hideModal55() {
  revModal.style.display = "none";
}

modalMenuBtn6.addEventListener("click", openModal66);
function openModal66() {
  modal.style.display = "block";
}

modalMenuBtn6.addEventListener("click", hideModal66);
function hideModal66() {
  ordModal.style.display = "none";
}



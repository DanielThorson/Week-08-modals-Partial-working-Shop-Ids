// for creating new donuts
var n = [];

let btn12 = document.querySelector(".donut_create");

btn12.addEventListener("click", function (event) {
  let type = prompt("What is the name of the donut you want to create?");
  let price = prompt("How much does it cost?");
  alert("New Donut Type Created.");
  n.push(type, Number.parseInt(price));
  fetch("https://donutshop-api.herokuapp.com/create-donut-type?id=234", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, price }),
  })
    .then((response) => response.json())
    .then((data) => n.push(data))
    .then(updateInventory) //add this to every potst
    .catch((err) => {
      console.error(err);
    });
});

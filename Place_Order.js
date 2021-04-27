// for placing order
var j = [];

let btn6 = document.querySelector(".place_order");

btn6.addEventListener("click", function (event) {
  let type = prompt("Which type do you want to order?");
  let count = prompt("How many do you want?");
  alert("order complete");
  j.push(type, Number.parseInt(count));
  fetch("https://donutshop-api.herokuapp.com/place-order?id=234", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, count }),
  })
    .then((response) => response.json())
    .then((data) => j.push(data))
    .then(updateInventory) //add this to every potst
    .catch((err) => {
      console.error(err);
    });
});

var h = [];

let btn10 = document.querySelector(".create_shop");

btn10.addEventListener("click", function (event) {
  let name = prompt("What is the name of your the shop?");
  alert("New Donut Shop Created.");
  h.push(name);
  fetch("https://donutshop-api.herokuapp.com/create-donut-shop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((data) => h.push(data));
  getInput().catch((err) => {
    console.error(err);
  });
  alert("Donut Shop Created Successfully");
});

// let btn34 = document.querySelector(".donut_add");

// btn34.addEventListener("click", function (event) {
//   let type = prompt("Which type do you want to add?");
//   let count = prompt("How many do you want to add?");
//   alert("inventory change complete");
//  h.push(name);
//   fetch("https://donutshop-api.herokuapp.com/add-donuts?id=234", {
//   method: "POST",
//   mode: 'cors',
//   headers: {
//     "Content-Type": "application/json"
//   },
//     body: JSON.stringify({type, count}),
//   })
//     .then((response) => response.json())
//     .then((data) => h.push(data))
//     .then(updateInventory) //add this to every potst
//     .catch((err) => {
//     console.error(err);
//   });
// });

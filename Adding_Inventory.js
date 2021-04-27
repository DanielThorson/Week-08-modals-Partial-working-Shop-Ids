// for adding donuts
  var z = [];


  let btn34 = document.querySelector(".donut_add");
  
  btn34.addEventListener("click", function (event) {
    let type = prompt("Which type do you want to add?");
    let count = prompt("How many do you want to add?");
    alert("inventory change complete");
   z.push(type, Number.parseInt(count));
    fetch("https://donutshop-api.herokuapp.com/add-donuts?id=234", {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({type, count}),
    })
      .then((response) => response.json())
      .then((data) => z.push(data))
      .then(updateInventory) //add this to every potst
      .catch((err) => {
      console.error(err);
    });
  });
  
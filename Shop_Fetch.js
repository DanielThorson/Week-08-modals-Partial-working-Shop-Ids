/ var shops = [];

 fetch("https://donutshop-api.herokuapp.com/shops/", {
   method: "GET",
 })
   .then((response) => response.json())
   .then((data) => {
     let a = document.getElementById("shops");
     for (var i = 0; i < data.length; i++) {
       let result = document.createElement("option");
       result.innerText = data[i];
       result.value = data[i];
       result.onclick = (Event) => {
         shopName = Event.target.value;
         getID(shopName);
       };
       a.append(result);
       console.log(result);
     }
   })
   .catch((err) => {
     console.error(err);
   });

 function getID(name) {
   fetch("https://donutshop-api.herokuapp.com/shop-id/", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
     },
     body: JSON.stringify({
       name: name,
     }),
   })
     .then((response) => response.json())
     .then((data) => (shopId = data.id))
     .catch((err) => {
       console.error(err);
     });
 }
  var shops = [];

 fetch("https://donutshop-api.herokuapp.com/shops/", {
   method: "GET",
 })
   .then((response) => response.json())
   .then((data) => {
     shops = data;
     let d = document.getElementById("#shops");
     let result = document.createElement("option");
     result.innerText = shops;
     for (var i = 0; i < shops.length; i++) {
       html += "<option>" + shops[i] + "</option>";
       document.getElementById("#shops").innerHTML = html;
       d.prepend(data);

   }})
   .catch((err) => {
     console.error(err);
   });

 fetch("https://donutshop-api.herokuapp.com/shops/", {
   method: "GET",
 })
   .then((response) => response.json())
   .then((data) => {
     shops = data;
     let u = document.getElementById("shops");
     let result = document.createElement("option");
     var html = "<option>";
     for (var i = 0; i < shops.length; i++) {
     html += "<option>" + shops[i] + "</option>";
     document.getElementById("shops").innerHTML = html;
     u.prepend(result);
   }
   .catch((err) => {
     console.error(err);
   });

// var rows = [];
// fetch(`https://donutshop-api.herokuapp.com/inventory?id=${shopId}`, {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     rows = data.donuts;
//     console.log(rows);
//     let x = document.getElementById("inventory");
//     let result = document.createElement("h5");
//     var html = "<table border='1|1'>";
//     for (var i = 0; i < rows.length; i++) {
//       html += "<td>" + rows[i].type + "</td>";
//       html +=
//         "<td>" +
//         rows[i].price.toLocaleString("en-us", {
//           style: "currency",
//           currency: "usd",
//         }) +
//         "</td>";
//       html += "<td>Count: " + rows[i].count + "</td>";

//       html += "</tr>";
//     }
//     html += "</table>";
//     document.getElementById("inventory").innerHTML = html;
//     x.prepend(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

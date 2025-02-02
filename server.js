const express = require("express");
const app = express();

const RESTAURANT = {
  name: "The Green Byte Bistro",
  isOpen: true,
  address: "742 Evergreen Rd, Mapleview, OS 45502",
  phone: "555-321-9876",
  menu: [
    {
      id: 1,
      name: "Quantum Quinoa Mushroom Burger",
      price: 13.0,
      rating: 4,
      category: "mains",
      details:
        "A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.",
    },
    {
      id: 2,
      name: "Binary Berry Cheesecake",
      price: 10.11,
      rating: 3,
      category: "desserts",
      details:
        "A creamy cheesecake bursting with flavor. A mix of berries in every byte.",
    },
    {
      id: 3,
      name: "Recursive Rigatoni",
      price: 17.0,
      rating: 5,
      category: "mains",
      details:
        "A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You'll keep coming back for more.",
    },
    {
      id: 4,
      name: "Pumpkin Pi Squared",
      price: 3.14,
      rating: 5,
      category: "desserts",
      details:
        "A delightful pumpkin dessert, squared and spiced to perfection.",
    },
    {
      id: 5,
      name: "Fibonacci String Bean Fries",
      price: 11.23,
      rating: 5,
      category: "sides",
      details:
        "Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.",
    },
  ],
};

app.get("/", (req, res) => {
  res.render("home.ejs", {
    restaurant: RESTAURANT,
  });
});

app.get("/menu", (req, res) => {
  res.render("menu.ejs", {
    fullMenu: RESTAURANT.menu,
  });
});

app.get("/menu/:category", (req, res) => {
  let reqParameter = req.params.category.slice(1);
  let capitalParam =
    reqParameter.charAt(0).toUpperCase() + reqParameter.slice(1);
  const menuItems = RESTAURANT.menu.filter(
    (item) => item.category === reqParameter
  );
  res.render("catagory.ejs", {
    menuitems: menuItems,
    name: capitalParam,
  });
});

app.listen(3000);

//   <!-- <% let mainsEl = document.getElementById('mains') %>
//   <% let ulEl = document.querySelector('#menuUl') %>
//   <% if (item.catagory === "mains") { %>
//   <% mainsEl.appendCHild(ulEL) %>
//   <% } %> --

//    <h2>Mains</h2>
//     <ul>
//       <% mains.forEach(item => { %>
//       <li>
//         <% if (item.rating === 5) { %> &#x2B50; <% } %> <%= item.name %>, $<%=
//         item.price %> - <%= item.rating %> stars
//         <ul>
//           <li><%= item.details %></li>
//         </ul>
//       </li>
//     </ul>
//     <% }) %>

  //    <% if (item.category === "mains") { %>
  // <h2>Mains</h2>
  // <% } else if (item.category === "sides") { %>
  // <h2>Sides</h2>
  // <% } else if (item.category === "desserts") { %>
  // <h2>Desserts</h2>
  // <% } %>

//   <script>
//     let mainsEl = document.getElementById("mains");
//     let ulEl = document.querySelector("#menuUl");
//   </script>
//   <% if (item.catagory === "mains") { %> <% mainsEl.appendCHild(ulEL); %> <%
//   } %>



    // <ul>
    //   <% fullMenu.forEach(item => { %> <% if (item.category === "mains") { %>
    //   <h2>Mains</h2>
    //   <% } else if (item.category === "sides") { %>
    //   <h2>Sides</h2>
    //   <% } else if (item.category === "desserts") { %>
    //   <h2>Desserts</h2>
    //   <% } %>
    // <ul>
    //   <li>
    //     <% if (item.rating === 5) { %> &#x2B50; <% } %> <%= item.name %>,
    //     $<%=item.price %> - <%= item.rating %> stars
    //     <ul>
    //       <li><%= item.details %></li>
    //     </ul>
    //   </li>
    //   <% }) %>
    // </ul>
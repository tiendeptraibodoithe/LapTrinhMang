const Tour = require("../models/product");

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("shop/product-list", {
//       prods: products,
//       pageTitle: "All Products",
//       path: "/products",
//     });
//   });
// };

exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    // pageTitle: "Shop",
    path: "/",
  });
};
exports.getNews = (req, res, next) => {
  res.render("shop/tin-tuc", {
    // pageTitle: "Shop",
    path: "/tin-tuc",
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getListTour = (req, res, next) => {
  Tour.fetchAll((tours) => {
    res.render("shop/list-tour", {
      tous: tours,
      pageTitle: "List",
      path: "/list-tour",
    });
  });
};

// exports.getListTour = (req, res, next) => {
//   res.render("shop/list-tour", {
//     pageTitle: "List Tour",
//     path: "/list-tour",
//   });
// };

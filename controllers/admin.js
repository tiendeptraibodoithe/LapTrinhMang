const Tour = require("../models/product");

// exports.getAddProduct = (req, res, next) => {
//   res.render("admin/add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true,
//   });
// };
// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(title, imageUrl, price, description);
//   product.save();
//   res.redirect("/");
// };

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("admin/products", {
//       prods: products,
//       pageTitle: "Admin Products",
//       path: "/admin/products",
//     });
//   });
// };

exports.getTours = (req, res, next) => {
  Tour.fetchAll((tours) => {
    res.render("admin/products", {
      tous: tours,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postTour = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const tour = new Tour(title, imageUrl);
  tour.save();
  res.redirect("/list-tour");
};

exports.getAddTour = (req, res, next) => {
  res.render("admin/add-tour", {
    pageTitle: "Add Tour",
    path: "/admin/add-tour",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

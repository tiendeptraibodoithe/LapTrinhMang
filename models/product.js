const fs = require("fs");
const path = require("path");

// const p = path.join(
//   path.dirname(require.main.filename),
//   "data",
//   "products.json"
// );

const q = path.join(path.dirname(require.main.filename), "data", "tours.json");

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(title, imageUrl, description, price) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     getProductsFromFile((products) => {
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     });
//     fs.readFile(p, (err, fileContent) => {});
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }
// };

const getProductsFromFile = (cb) => {
  fs.readFile(q, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Tour {
  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
  }

  save() {
    getProductsFromFile((tours) => {
      tours.push(this);
      fs.writeFile(q, JSON.stringify(tours), (err) => {
        console.log(err);
      });
    });
    fs.readFile(q, (err, fileContent) => {});
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

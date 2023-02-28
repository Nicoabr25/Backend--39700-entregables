import express from "express";
import ProductManager from "./ProductManager.js";

const manager = new ProductManager("./products.json");

const app = express();

//localhost:8080/products?limit=3
app.get("/products", async (req, res) => {
  const { limit } = req.query;
  const products = await manager.getProducts();
  if (limit == undefined) {
    res.send(products);
  } else {
    const aux = products.slice(0, parseInt(limit));
    res.send(aux);
  }
});

//localhost:8080/products/2
app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;
  const ProductId = await manager.getProductbyId(parseInt(pid));
  if (ProductId == undefined) {
    res.send("Producto inexistente");
  } else {
    res.send(ProductId);
  }
});

// app.get("/bienvenida", (req, res) => {
//   res.send(`<h1 style='color:blue'>Hello World!</h1>`);
// });

// app.get("/usuario", (req, res) => {
//   res.send({
//     firstname: "pepe",
//     apellido: "pepepe",
//     age: "30",
//     mail: "undefined",
//   });
// });

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

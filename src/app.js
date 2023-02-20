import express from "express";
import ProductManager from "./ProductManager";

const app = express();

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style='color:blue'>Hello World!</h1>`);
});

app.get("/usuario", (req, res) => {
  res.send({
    firstname: "pepe",
    apellido: "pepepe",
    age: "30",
    mail: "undefined",
  });
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

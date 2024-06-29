import Produto from "./Produto.js";
import $ from "jquery";

async function productsList() {
  return await fetch("http://localhost:3000/products/").then((data) =>
    data.json()
  );
}

async function createProductsPerPage() {
  const data = await productsList();

  return data.map(({ name, image, price }) => {
    return new Produto(name, image, price);
  });
}

function loadsProducts(arrayProductsPerPage) {
  return arrayProductsPerPage.map(async (product) =>
    $("#ulListProducts")
      .append(await product.getLi())
      .fadeIn(500)
  );
}

export async function pagination() {
  const instanceProducts = await createProductsPerPage();
  return loadsProducts(instanceProducts);
}

export async function postServer(name, price, image) {
  const request = await fetch("http://localhost:3000/products/", {
    method: "POST",
    headers: {
      "Content-type": "application-json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      image: image,
    }),
  });
  const resolve = await request.json();
  return resolve;
}

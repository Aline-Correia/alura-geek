import $ from "jquery";
import Produto from "./Produto.js";

async function createProducts() {
  const name = $("input[name='name'").val();
  const price = parseFloat(
    $("input[name='price'").val().trim().replace(",", "."),
    10
  );
  const image = $("input[name='image'").val();

  const product = new Produto(name, image, price);
  return product;
}

async function addProducts() {
  const product = await createProducts();
  console.log(product);

  return $("#ulListProducts")
    .append(await product.getLi())
    .fadeIn(500);
}

export { addProducts, createProducts };

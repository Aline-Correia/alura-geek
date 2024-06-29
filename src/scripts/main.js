import "../styles/styles.css";
import $ from "jquery";
import { resetForm } from "./form.js";
import { pagination, postServer } from "./inserirProdutos.js";
import deleteProducts from "./deleteProducts.js";
import { addProducts, createProducts } from "./addProduct.js";

window.onload = async () => {
  const arrayPromisesInsertProducts = await await pagination();

  await Promise.all(arrayPromisesInsertProducts).then(() => {
    deleteProducts($(".icon-delete-product"));

    $("button[name='submit']").click(async function (e) {
      await addProducts();
      const { name, price, image } = await createProducts();
      // console.log(p);
      await postServer(name, price, image);
      setTimeout(async () => resetForm(), 750);
      await deleteProducts($(".icon-delete-product"));
      e.preventDefault();
    });
  });
};

$("#form").submit(function (e) {
  e.preventDefault();
  return false;
});

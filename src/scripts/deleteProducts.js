import axios from "axios";
import $ from "jquery";

async function deleteProducts(buttonRemoveProduct) {
  $.each(buttonRemoveProduct, function (_, element) {
    $(element).click(async function (e) {
      const name = $(this).parent().prev().text();

      const idProduto = await fetch(
        `http://localhost:3000/products?name=${encodeURIComponent(name)}`
      )
        .then((data) => data.json())
        .then(([{ id }]) => id);

      await deletaProduto(idProduto).then((data) => data);

      e.preventDefault();
    });
  });
}

async function deletaProduto(id) {
  let url = `http://localhost:3000/products/${id}`;
  const retorno = await axios.delete(url);
  console.log(retorno);
}

export default deleteProducts;

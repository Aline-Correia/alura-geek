import $ from "jquery";

export default class Produto {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
  getName() {
    return this.name;
  }

  async getImage() {
    await fetch(this.image).catch(
      () => (this.image = "https://placehold.co/200")
    );

    return this.image;
  }

  getPrice() {
    return this.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  async getLi() {
    const request = await $.get(
      { url: "../src/fragments/li.html", dataType: "html" },
      (data) => data
    );
    const urlResolve = await this.getImage();

    const resolve = request
      .replace("${name}", this.getName())
      .replace("${price}", this.getPrice())
      .replace("${image}", urlResolve);

    return resolve;
  }
}

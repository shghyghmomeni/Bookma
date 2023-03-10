// const API_URL = "http://localhost:3000";

const productListMainDiv = document.getElementById("product-list");
//categories
const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    console.log(data);

    data.forEach((item) => {
      addProductsToDOM(item);
    });
  } catch {
    console.log("404 Page");
  }
};
getProducts();

function addProductsToDOM(item) {
  const cart = document.createElement("div");
  cart.classList.add("h-[244px]", "mb-6");
  cart.id = item.id;
  cart.addEventListener("click", goToSingleProductPage);
  productListMainDiv.append(cart);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "bg-[#F3F3F3]",
    "w-[100%]",
    "h-[182px]",
    "rounded-3xl"
  );
  cart.append(imageDiv);

  const image = document.createElement("img");
  image.src = item.image;
  imageDiv.append(image);

  const informationDiv = document.createElement("div");
  cart.append(informationDiv);

  const title = document.createElement("h3");
  title.classList.add("text-2xl", "font-bold", "my-1", "truncate");
  title.innerText = item.productName;
  informationDiv.append(title);

  const cost = document.createElement("p");
  cost.classList.add("text-base", "font-bold", "my-1", "truncate");
  cost.innerText = `تومان ${item.cost}`;
  informationDiv.append(cost);
}

//go to single page
function goToSingleProductPage(e) {
  productID = e.currentTarget.id;
  console.log(productID);
  getSingleProducts(productID);
}

const getSingleProducts = async (productID) => {
  try {
    const res = await fetch(`${API_URL}/products?id=${productID}`);
    const singleProduct = await res.json();
    console.log(singleProduct);
    window.open(`../pages/singleProduct.html?id=${productID}`, "_self");
  } catch {
    console.log("404 Page");
  }
};

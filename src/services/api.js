const api_url = "https://fakestoreapi.com";

export const getProducts = () => {
  fetch(api_url + "/products?limit=20")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

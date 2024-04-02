function getProducts(keyword) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/yonghyun421/hnm-practice/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/yonghyun421/hnm-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };

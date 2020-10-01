const getListProductByCate = (idType, page) => {
    let url;
    if(idType !== "COLLECTION") //COLLECTION id tự mình tạo ra trong Collecion.js khi truyền sang ListProduct.js
    {
        url = `http://192.168.1.240/apiMyShop/product_by_type.php?id_type=${idType}&page=${page}`;
    }
    else {
        url = `http://192.168.1.240/apiMyShop/get_collection.php?page=${page}`;
    }
    return (
        fetch(url)
        .then((response) => response.json())
    )
};

export default getListProductByCate;
const searchProduct = (key) => {
    const url = `http://192.168.1.240/apiMyShop/search.php?key=${key}`;
    return (
        fetch(url)
        .then((response) => response.json())
    )
};

export default searchProduct;
const getListProductByCate = (idType, page) => {
    const url = `http://192.168.1.240/apiMyShop/product_by_type.php?id_type=${idType}&page=${page}`;
    return (
        fetch(url)
        .then((response) => response.json())
    )
};

export default getListProductByCate;
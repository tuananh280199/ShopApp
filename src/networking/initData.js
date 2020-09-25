const initData = () => (
    fetch('http://192.168.1.240/apiMyShop/')
    .then((response) => response.json())
);

export default initData;
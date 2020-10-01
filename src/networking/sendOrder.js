const sendOrder = (token, arrayDetail) => (
    fetch('http://192.168.1.240/apiMyShop/cart.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ token, arrayDetail })
    })
    .then(res => res.text())
);

export default sendOrder;
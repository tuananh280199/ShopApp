const getOrderHistory = (token) => (
    fetch('http://192.168.1.240/apiMyShop/order_history.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json()) //nếu user chưa order thì sẽ res.json sẽ null.làm tiếp check null

);

export default getOrderHistory;
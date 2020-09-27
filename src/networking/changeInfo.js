const changeInfo = (token,name,phone,address) => (
    fetch('http://192.168.1.240/apiMyShop/change_info.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ token, name, phone, address })
    })
);

export default changeInfo;
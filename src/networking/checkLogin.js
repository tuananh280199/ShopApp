const checkLogin = (token) => (
    fetch('http://192.168.1.240/apiMyShop/check_login.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ token })
    })
);

export default checkLogin;
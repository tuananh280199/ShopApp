const signIn = (email, password) => (
    fetch('http://192.168.1.240/apiMyShop/login.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
);

export default signIn;
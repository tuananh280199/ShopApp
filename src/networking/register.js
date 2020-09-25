const register = (email, name, password) => (
    fetch('http://192.168.1.240/apiMyShop/register.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ email, name, password })
    })
);

export default register;
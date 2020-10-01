import saveToken from '../AsyncStorage/saveToken';
import getToken from '../AsyncStorage/getToken';

const getNewToken = (token) => (
    fetch('http://192.168.1.240/apiMyShop/refresh_token.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.text())
);

const refreshToken = async () => {
    try {
        const token = await getToken();
        if(token === '' || token === 'TOKEN_KHONG_HOP_LE'){
            console.log("Chưa có token");
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
    } catch(e) {
        console.log(e)
    }
};

export default refreshToken;
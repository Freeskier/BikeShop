import axios from 'axios'
import AuthService from './AuthService';

const API_URL = 'http://localhost:5000/api/';

class ShopService{

    add(name, address, longi, lati)
    {
        let shop = {
            "Name": name,
            "Adress": address,
            "Longitude": longi,
            "Latitude": lati
        }
        return axios.post
        (
            API_URL + "shop/add",
            shop,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + AuthService.getLocal().token
                }
            }
        )
    }

    register(username, password, email)
    {
        let user = {
            "Name": username,
            "Password": password,
            "Email": email
        }
        return axios.post
        (
            API_URL + "user/register",
            user,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocal().token
                }
            }
        )
    }
}

export default new ShopService();
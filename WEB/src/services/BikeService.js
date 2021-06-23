import axios from 'axios'

const API_URL = 'http://localhost:5000/api/';

class BikeService{

    login(username, password)
    {
        let user = {
            "Name": username,
            "Password": password
        }
        return axios.post
        (
            API_URL + "user/login",
            user,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
                    'Accept': 'application/json'
                }
            }
        )
    }

}

export default new BikeService();
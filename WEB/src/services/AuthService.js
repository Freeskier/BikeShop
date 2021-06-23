import axios from 'axios'

const API_URL = 'http://localhost:5000/api/';

class AuthService{

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

    saveLocal(user)
    {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getLocal()
    {
        var user = localStorage.getItem("user");
        if(user != "")
            return JSON.parse(user);
        else
            return null;
    }

}

export default new AuthService();
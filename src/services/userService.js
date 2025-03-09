import axios from '../axios';

const handleLoginApi= (userEmail,userPassword)=>{
 return axios.post('/api/login',{email: userEmail,password: userPassword}); //email and password from server
}

export {handleLoginApi}

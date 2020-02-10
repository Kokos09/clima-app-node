const axios=require('axios');

const getClima=async(lan,lng)=>{
    
    const  resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lng}&appid=1650e529329e77487049d6738e3b2d83&units=metric`);
    
    return resp.data.main.temp;

}

module.exports={
    getClima
}
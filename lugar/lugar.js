const axios=require('axios');

const getLugarLatLng=async(dir)=>{

    const encodeUrl=encodeURI(dir);

    const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'x-rapidapi-key': '3914c801d9msh5e7bb746d362796p1ba3c2jsnbe208f2ec3a4'}
  });

  const resp= await instance.get();

  if(resp.data.Results.length === 0){
      throw new Error(`No hay resultados para ${dir}`)
  }

const data     = resp.data.Results[0];
const direccion= data.name;
const lag      = data.lat;
const lng      = data.lon;


  return{
      direccion,
      lag,
      lng
  }
}
module.exports={
    getLugarLatLng
}


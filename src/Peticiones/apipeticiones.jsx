import { VITE_APIBASE,VITE_API_KEY } from "../../config";
async function Generarpeticion(endpoint){

    const requestOptions = {
            method: "GET",
            headers: {
                        "X-API-Key":VITE_API_KEY,
                    }
            }
    const response = await fetch(`${VITE_APIBASE}/${endpoint}`, requestOptions); 
    const data= await response.json();
    const resp= response.status;
    const datos={data,resp}
    return datos
}
export default Generarpeticion
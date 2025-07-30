import { VITE_APIBASE,VITE_API_KEY } from "../../config";
async function GenerarEnvioCorreo(endpoint,bodyoptions){
    const formData = new FormData();
    formData.append("nombre", bodyoptions.nombre);
    formData.append("correocontacto", bodyoptions.correocontacto);
    formData.append("mensaje", bodyoptions.mensaje);
    const requestOptions = {
            method: "POST",
            headers: {
                        "X-API-Key":VITE_API_KEY,
                    },
            body: formData,
            }
    const response = await fetch(`${VITE_APIBASE}/${endpoint}`, requestOptions); 
    const data= await response.json();
    const resp= response.status;
    const datos={data,resp}
    return datos
}
export default GenerarEnvioCorreo
import { VITE_APIBASE,VITE_API_KEY } from "../../config";
// async function Generarpeticion(endpoint){
//     console.log('aca')
//     const requestOptions = {
//             method: "GET",
//             headers: {
//                         "X-API-Key":VITE_API_KEY,
//                     }
//             }
//     const response = await fetch(`${VITE_APIBASE}/${endpoint}`, requestOptions); 
//     const data= await response.json();
//     const resp= response.status;
//     const datos={data,resp}
//     return datos
// }
// export default Generarpeticion
async function Generarpeticion(endpoint) {
  const requestOptions = {
    method: "GET",
    headers: {
      "X-API-Key": VITE_API_KEY,
    }
  };

  try {
    // Intenta hacer la petición con timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 segundos timeout
    
    const response = await fetch(`${VITE_APIBASE}/${endpoint}`, {
      ...requestOptions,
      signal: controller.signal
    }).catch(error => {
      if (error.name === 'AbortError') {
        throw new Error('Timeout: El servidor no respondió a tiempo');
      }
      throw error;
    });
    
    clearTimeout(timeoutId);

    // Si hay respuesta pero falló (status != 200)
    if (!response.ok) {
      return {
        data: null,
        resp: response.status,
        error: `Error HTTP: ${response.status}`
      };
    }

    const data = await response.json();
    return { data, resp: response.status };

  } catch (error) {
    // Captura errores de red, CORS, parseo JSON, etc.
    console.error('Error en la petición:', error.message);
    
    return {
      data: null,
      resp: 503, // Service Unavailable
      error: 'El servicio no está disponible temporalmente'
    };
  }
}

export default Generarpeticion;
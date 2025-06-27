import React,{useState,useEffect} from "react";

function Home(){
    const [languagePercentages, setLanguagePercentages] = useState({});
    const [frameworksDetails,setFrameworksDetails]= useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
            const fetchRepos = async () => {
                setLoading(true)
              // await fetchlenguajes()
            const response =await fetch("http://127.0.0.1:8000/ListarFrameworks/", {
          method: "GET",
          headers: {
            //Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          //body: JSON.stringify({ query }),
        })
           const data = await response.json();
           console.log(data)
           setFrameworksDetails(data.detalles)
             //await fetchAutoDetectedFrameworks()
             setLoading(false)
            };
        
            fetchRepos();
          }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return(
        <div>
            <p style={{fontSize:25,fontWeight:'bold'}}>RAFAEL IBARRA DEV.</p>

          <div>
            <h2>Porcentaje de lenguajes en todos los repositorios:</h2>
            <ul>
              {Object.entries(languagePercentages).map(([language, percentage]) => (
                <li key={language}>{`${language}: ${percentage}%`}</li>
              ))}
            </ul>
          </div>

           <div>
            <h2>Porcentaje de frameworks en todos los repositorios:</h2>
            <ul>
              {Object.entries(frameworksDetails).map(([language, percentage]) => (
                <li key={language}>{`${language.Framework}: ${percentage}%`}</li>
              ))}
            </ul>
          </div>




        </div>
    )
}

export default Home


import React,{useState,useEffect} from "react";

function Nombre(){

    const [languagePercentages, setLanguagePercentages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    // const GITHUB_TOKEN = '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'; // Reemplaza con tu token
    useEffect(() => {
        const fetchRepos = async () => {
          try {
            const reposResponse = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}`, {
              headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
              }
            });
            if (!reposResponse.ok) {
              throw new Error('Network response was not ok');
            }
            const repos = await reposResponse.json();
    
            // Initialize an object to hold the total bytes for each language
            const languageTotals = {};
    
            // Fetch languages for each repo
            const languagesPromises = repos.map(async (repo) => {
              const languagesResponse = await fetch(repo.languages_url, {
                headers: {
                    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                }
              });
              const repoLanguages = await languagesResponse.json();
    
              // Add the languages to the totals object
              for (const [language, bytes] of Object.entries(repoLanguages)) {
                if (languageTotals[language]) {
                  languageTotals[language] += bytes;
                } else {
                  languageTotals[language] = bytes;
                }
              }
            });
    
            // Wait for all language fetches to complete
            await Promise.all(languagesPromises);
    
            // Calculate the total bytes
            const totalBytes = Object.values(languageTotals).reduce((acc, bytes) => acc + bytes, 0);
    
            // Calculate percentages
            const percentages = {};
            for (const [language, bytes] of Object.entries(languageTotals)) {
              percentages[language] = ((bytes / totalBytes) * 100).toFixed(2);
            }
    
            setLanguagePercentages(percentages);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
          
        };
    
        fetchRepos();
      }, []);
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
    return(
        <div>
            <p style={{fontSize:25,fontWeight:'bold'}}>Mi nombre es Rafael Ibarra, soy un desarrollador Web.</p>

            <div>
      <h2>Porcentaje de lenguajes en todos los repositorios:</h2>
      <ul>
        {Object.entries(languagePercentages).map(([language, percentage]) => (
          <li key={language}>{`${language}: ${percentage}%`}</li>
        ))}
      </ul>
    </div>

           



        </div>
    )
}

export default Nombre
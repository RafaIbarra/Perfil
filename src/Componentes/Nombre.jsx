import React,{useState,useEffect} from "react";

function Nombre(){

  const [languagePercentages, setLanguagePercentages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [frameworksDetails,setFrameworksDetails]= useState({});


  const FRAMEWORK_KEYWORDS = {
  react: 'React',
  'react-native': 'React Native',
  next: 'Next.js',
  vue: 'Vue',
  angular: 'Angular',
  django: 'Django',
  'django-rest': 'Django REST',
  fastapi: 'FastAPI',
  flask: 'Flask',
  laravel: 'Laravel',
  spring: 'Spring Boot',
  express: 'Express'
};

  const fetchlenguajes =async()=>{
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
  }

  const fetchframeworks=async()=>{
    try {
      const reposResponse = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      });
      if (!reposResponse.ok) throw new Error('Network response was not ok');
      
      const repos = await reposResponse.json();
      const frameworksToInclude = [  // Frameworks que SÍ quieres conservar
        'React', 
        'React Native', 
        'Django', 
        'Django REST framework',
        'DRF',
        'Next.js',
        'Vue',
        'Angular'
      ];

      const frameworkTotals = {};  // Objeto para almacenar solo los frameworks

      const languagesPromises = repos.map(async (repo) => {
        const languagesResponse = await fetch(repo.languages_url, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
          }
        });
        const repoLanguages = await languagesResponse.json();
        
        // Filtrar y guardar SOLO los frameworks de interés
        for (const [language, bytes] of Object.entries(repoLanguages)) {
          if (frameworksToInclude.some(framework => 
            language.toLowerCase().includes(framework.toLowerCase())
          )) {
            if (frameworkTotals[language]) {
              frameworkTotals[language] += bytes;
            } else {
              frameworkTotals[language] = bytes;
            }
          }
        }
      });
      
      await Promise.all(languagesPromises);

      // Calcular porcentajes solo con los frameworks incluidos
      const totalBytes = Object.values(frameworkTotals).reduce((acc, bytes) => acc + bytes, 0);
      const percentages = {};

      for (const [framework, bytes] of Object.entries(frameworkTotals)) {
        percentages[framework] = ((bytes / totalBytes) * 100).toFixed(2);
      }

      setFrameworksPercentages(percentages);  // Guardar resultados
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }




// const fetchAutoDetectedFrameworks = async () => {
//   try {
//     // 1. Obtener repositorios del usuario
//     const reposResponse = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}`, {
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
//       },
//     });
    
//     if (!reposResponse.ok) throw new Error("Error al obtener repositorios");
//     const repos = await reposResponse.json();

//     // 2. Objeto para almacenar dependencias por repositorio
//     const repoDependencies = {};

//     // 3. Función auxiliar para detectar tipo de repositorio
//     const detectRepoType = (repo) => {
//       if (repo.language === 'Python') return 'python';
//       if (repo.language === 'JavaScript' || repo.language === 'TypeScript') return 'js';
//       return 'other';
//     };

//     // 4. Procesar cada repositorio
//     for (const repo of repos) {
//       // Inicializar estructura para este repositorio
//       repoDependencies[repo.name] = {
//         url: repo.html_url,
//         packages: [],
//         hasDependencies: false,
//         type: detectRepoType(repo)
//       };

//       // Consulta GraphQL para dependencias
//       const query = `
//         query {
//           repository(owner: "${repo.owner.login}", name: "${repo.name}") {
//             dependencyGraphManifests(first: 10) {
//               nodes {
//                 filename
//                 dependencies(first: 100) {
//                   nodes {
//                     packageName
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `;

//       try {
//         const graphqlResponse = await fetch("https://api.github.com/graphql", {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ query }),
//         });

//         if (!graphqlResponse.ok) continue;

//         const result = await graphqlResponse.json();
//         const manifests = result.data?.repository?.dependencyGraphManifests?.nodes || [];

//         // Procesar manifests encontrados
//         manifests.forEach((manifest) => {
//           if (manifest.dependencies.nodes.length > 0) {
//             repoDependencies[repo.name].hasDependencies = true;
//             manifest.dependencies.nodes.forEach((dep) => {
//               const packageName = dep.packageName.toLowerCase();
//               repoDependencies[repo.name].packages.push(packageName);
//             });
//           }
//         });

//         // Fallback para Python (requirements.txt)
//         if (repoDependencies[repo.name].type === 'python' && !repoDependencies[repo.name].hasDependencies) {
//           try {
//             const requirementsRes = await fetch(
//               `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents/requirements.txt`,
//               { headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` } }
//             );
            
//             if (requirementsRes.ok) {
//               const content = await requirementsRes.json();
//               const text = atob(content.content);
//               const packages = text.split('\n')
//                 .filter(line => line.trim() && !line.startsWith('#'))
//                 .map(line => line.split('=')[0].split('>')[0].split('<')[0].trim().toLowerCase());
              
//               repoDependencies[repo.name].packages.push(...packages);
//               repoDependencies[repo.name].hasDependencies = packages.length > 0;
//             }
//           } catch (e) {
//             console.error(`Error leyendo requirements.txt en ${repo.name}:`, e);
//           }
//         }

//       } catch (error) {
//         console.error(`Error procesando ${repo.name}:`, error);
//       }
//     }

//     // 5. Configuración de detección de frameworks
//     const frameworkDetectors = {
//       // JavaScript/React
//       'react': { name: 'React', pattern: /^react$/ },
//       'react-native': { 
//         name: 'React Native', 
//         pattern: /^(react\-native|@react\-native|@callstack|@react\-navigation)/ 
//       },
//       'next': { name: 'Next.js', pattern: /^next$/ },
      
//       // Python
//       'django': { name: 'Django', pattern: /^django$/ },
//       'drf': { 
//         name: 'Django REST Framework', 
//         pattern: /^(djangorestframework|drf\-|django\-rest\-)/ 
//       },
//       'fastapi': { 
//         name: 'FastAPI', 
//         pattern: /(^|\/|-)fastapi(-|$)|^fast-api/,
//         ecosystem: 'pypi'
//       },
      
//       // Otros
//       'flask': { name: 'Flask', pattern: /^flask$/ },
//       'vue': { name: 'Vue', pattern: /^vue/ },
//       'angular': { name: 'Angular', pattern: /^@angular/ }
//     };

//     const ignorePatterns = [
//       /^@babel/, /^eslint/, /^@types/, /^@vitejs/,
//       /^lottie/, /^@ant/, /^@shopify/, /^@emotion/,
//       /^hoist/, /^jest/, /^testing/, /^webpack/,
//       /^babel/, /^@testing/, /^prettier/, /^stylelint/
//     ];

//     // 6. Procesamiento y conteo de frameworks
    
//     const frameworkDetails = {};
    

//     Object.entries(repoDependencies).forEach(([repoName, repoData]) => {
//       const repoFrameworks = new Set();

      
//       repoData.packages.forEach((pkg) => {
//         if (ignorePatterns.some(pattern => pattern.test(pkg))) return;

//         for (const [key, detector] of Object.entries(frameworkDetectors)) {
//           if (detector.pattern.test(pkg)) {
//             const frameworkName = detector.name;
            
            
//             if (!frameworkDetails[frameworkName]) {
//               frameworkDetails[frameworkName] = {
//                 count: 0,
//                 repositories: []
//               };
//             }
            
//             // Solo agregar el repo una vez por framework
//             if (!repoFrameworks.has(frameworkName)) {
//               frameworkDetails[frameworkName].count += 1;
//               frameworkDetails[frameworkName].repositories.push({
//                 name: repoName,
//                 url: repoData.url,
//                 type: repoData.type
//               });
//               repoFrameworks.add(frameworkName);
//             }
            
//             break;
//           }
//         }
//       });
//     });

    
    
//     console.log('Detalle completo de frameworks:', frameworkDetails);
//     return {
      
//       details: frameworkDetails,
      
//     };

//   } catch (error) {
//     console.error("Error general:", error);
//     throw error;
//   }
// };

const fetchAutoDetectedFrameworks = async () => {
  try {
    // 1. Obtener repositorios del usuario
    const reposResponse = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    
    if (!reposResponse.ok) throw new Error("Error al obtener repositorios");
    const repos = await reposResponse.json();

    // 2. Objeto para almacenar dependencias por repositorio
    const repoDependencies = {};

    // 3. Función auxiliar para detectar tipo de repositorio
    const detectRepoType = (repo) => {
      if (repo.language === 'Python') return 'python';
      if (repo.language === 'JavaScript' || repo.language === 'TypeScript') return 'js';
      return 'other';
    };

    // 4. Procesar cada repositorio
    for (const repo of repos) {
      // Inicializar estructura para este repositorio
      repoDependencies[repo.name] = {
        url: repo.html_url,
        packages: [],
        hasDependencies: false,
        type: detectRepoType(repo)
      };

      // Consulta GraphQL para dependencias
      const query = `
        query {
          repository(owner: "${repo.owner.login}", name: "${repo.name}") {
            dependencyGraphManifests(first: 10) {
              nodes {
                filename
                dependencies(first: 100) {
                  nodes {
                    packageName
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const graphqlResponse = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!graphqlResponse.ok) continue;

        const result = await graphqlResponse.json();
        const manifests = result.data?.repository?.dependencyGraphManifests?.nodes || [];

        // Procesar manifests encontrados
        manifests.forEach((manifest) => {
          if (manifest.dependencies.nodes.length > 0) {
            repoDependencies[repo.name].hasDependencies = true;
            manifest.dependencies.nodes.forEach((dep) => {
              const packageName = dep.packageName.toLowerCase();
              repoDependencies[repo.name].packages.push(packageName);
            });
          }
        });

        // Fallback para Python (requirements.txt)
        if (repoDependencies[repo.name].type === 'python' && !repoDependencies[repo.name].hasDependencies) {
          try {
            const requirementsRes = await fetch(
              `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents/requirements.txt`,
              { headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` } }
            );
            
            if (requirementsRes.ok) {
              const content = await requirementsRes.json();
              const text = atob(content.content);
              const packages = text.split('\n')
                .filter(line => line.trim() && !line.startsWith('#'))
                .map(line => line.split('=')[0].split('>')[0].split('<')[0].trim().toLowerCase());
              
              repoDependencies[repo.name].packages.push(...packages);
              repoDependencies[repo.name].hasDependencies = packages.length > 0;
            }
          } catch (e) {
            console.error(`Error leyendo requirements.txt en ${repo.name}:`, e);
          }
        }

      } catch (error) {
        console.error(`Error procesando ${repo.name}:`, error);
      }
    }

    // 5. Configuración de detección de frameworks
    const frameworkDetectors = {
      // JavaScript/React
      'react': { name: 'React', pattern: /^react$/ },
      'react-native': { 
        name: 'React Native', 
        pattern: /^(react\-native|@react\-native|@callstack|@react\-navigation)/ 
      },
      'next': { name: 'Next.js', pattern: /^next$/ },
      
      // Python
      'django': { name: 'Django', pattern: /^django$/ },
      'drf': { 
        name: 'Django REST Framework', 
        pattern: /^(djangorestframework|drf\-|django\-rest\-)/ 
      },
      'fastapi': { 
        name: 'FastAPI', 
        pattern: /(^|\/|-)fastapi(-|$)|^fast-api/,
        ecosystem: 'pypi'
      },
      
      // Otros
      'flask': { name: 'Flask', pattern: /^flask$/ },
      'vue': { name: 'Vue', pattern: /^vue/ },
      'angular': { name: 'Angular', pattern: /^@angular/ }
    };

    const ignorePatterns = [
      /^@babel/, /^eslint/, /^@types/, /^@vitejs/,
      /^lottie/, /^@ant/, /^@shopify/, /^@emotion/,
      /^hoist/, /^jest/, /^testing/, /^webpack/,
      /^babel/, /^@testing/, /^prettier/, /^stylelint/
    ];

    // 6. Procesamiento para frameworkDetails
    const frameworkDetails = {};

    Object.entries(repoDependencies).forEach(([repoName, repoData]) => {
      const repoFrameworks = new Set();

      repoData.packages.forEach((pkg) => {
        if (ignorePatterns.some(pattern => pattern.test(pkg))) return;

        for (const [key, detector] of Object.entries(frameworkDetectors)) {
          if (detector.pattern.test(pkg)) {
            const frameworkName = detector.name;
            
            if (!frameworkDetails[frameworkName]) {
              frameworkDetails[frameworkName] = {
                count: 0,
                repositories: []
              };
            }
            
            if (!repoFrameworks.has(frameworkName)) {
              frameworkDetails[frameworkName].count += 1;
              frameworkDetails[frameworkName].repositories.push({
                name: repoName,
                url: repoData.url,
                type: repoData.type
              });
              repoFrameworks.add(frameworkName);
            }
            
            break;
          }
        }
      });
    });

    
    return {
      details: frameworkDetails
    };

  } catch (error) {
    console.error("Error general:", error);
    throw error;
  }
};

const analyzeRepos = async () => {
  try {
    const {  details } = await fetchAutoDetectedFrameworks();
    
    
    setFrameworksDetails(details);
    //setReposWithoutDependencies(reposWithoutDeps);

    console.log("Resultados:", {
      
      frameworksDetails: details,
      
    });
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
        const fetchRepos = async () => {
          // await fetchlenguajes()
         await analyzeRepos()
         //await fetchAutoDetectedFrameworks()
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
            {/* <ul>
              {Object.entries(frameworksPercentages).map(([language, percentage]) => (
                <li key={language}>{`${language}: ${percentage}%`}</li>
              ))}
            </ul> */}
          </div>




        </div>
    )
}

export default Nombre
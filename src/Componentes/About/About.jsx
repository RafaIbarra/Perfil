import React,{useState,useEffect} from "react";

import "./main.css"
function About(){
  
    return(
        <div className="main-container">
            <div className="flex-container">
                <div className="flex-text">
                    <h1 className="about-title">
                         Hola, soy{" "}
                         <span>
                            Rafael Ibarra
                        </span>
                    </h1>
                    <p className="subtitle">Desarrollador Full-Stack & Mobile</p>
                    <p className="text-block">
                    Especializado en crear experiencias digitales excepcionales con tecnologías modernas. Desde aplicaciones
                    web responsivas hasta apps móviles nativas, transformo ideas en soluciones tecnológicas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <button
                        // size="lg"
                        // className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                        {/* <Mail className="mr-2 h-5 w-5" /> */}
                        Contáctame
                    </button>
                    <button 
                    // variant="outline" size="lg"
                    >
                        {/* <Download className="mr-2 h-5 w-5" /> */}
                        Descargar CV
                    </button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default About

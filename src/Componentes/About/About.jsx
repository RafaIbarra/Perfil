import React,{useState,useEffect} from "react";
 
import {MailOutlined,CloudDownloadOutlined } from '@ant-design/icons';
import "./main.css"
const phrases = [
  "Rafael Ibarra",
  "Desarrollador Full-Stack",
  "Desarrollador Mobile"
];
function About(){
  const [index, setIndex] = useState(0);       // frase actual
  const [subIndex, setSubIndex] = useState(0); // letra actual
  const [reverse, setReverse] = useState(false); // para borrar si querés
  const [pause, setPause] = useState(false);
  useEffect(() => {
  if (pause) return;

  const currentPhrase = phrases[index];

  if (!reverse && subIndex === currentPhrase.length + 1) {
    setPause(true);
    setTimeout(() => {
      setReverse(true);
      setPause(false);
    }, 3000);
    return;
  }

  if (reverse && subIndex === 0) {
    setReverse(false);
    setIndex((prev) => (prev + 1) % phrases.length);
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => prev + (reverse ? -1 : 1));
  }, reverse ? 30 : 100);

  return () => clearTimeout(timeout);
}, [subIndex, index, reverse, pause]);

    return(
        <div className="main-container">
            <div className="flex-container">
                <div className="flex-text">
                    <h1 className="about-title">
                         Hola, soy{" "}
                         <span className="gradient-text">
                           {phrases[index].substring(0, subIndex)}
                           <span className="blinking-cursor">|</span>
                        </span>
                    </h1>
                    <p className="subtitle">Desarrollador Full-Stack & Mobile</p>
                    <p className="text-block-about">
                    Especializado en crear experiencias digitales excepcionales con tecnologías modernas. Desde aplicaciones
                    web responsivas hasta apps móviles nativas, transformo ideas en soluciones tecnológicas.
                    </p>

                    <div className="button-group">
                        <button className="primary-button">
                            <MailOutlined style={{ fontSize: 15 }} />
                            Contáctame
                        </button>
                     <button className="primary-button">
                       <CloudDownloadOutlined style={{ fontSize: 17 }} />
                        Descargar CV
                    </button>
                    </div>


                </div>

                <div  className="flex-section">
                    <div style={{ position: 'relative'}}>
                        <div 
                        //  className="gradient-glow"
                        >
                            <img
                                src="/profile.png"
                                alt="Rafael Ibarra"
                                width="400"
                                height="400"
                                className="profile-image"
                                />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About

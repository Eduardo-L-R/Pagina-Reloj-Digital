import React, { useState, useEffect } from 'react';
import imagen1 from './assets/gatoTenor.gif';
import imagen2 from './assets/terrorCat.gif';
import sonido from './assets/Grabación.mp3';
import './App.css';

export const App = () => {

  useEffect(() => {
    inicioReloj();
    iniciarCambioImagen();
  }, [])

  const [hora, sethora] = useState("00 : 00 : 00");
  const [imagen, setimagen] = useState(imagen1);

  const reproducir = () => {
    document.getElementById('demo').play()
  }

  const detener = () => {
    document.getElementById('demo').pause()
  }

  const inicioReloj = () => {
    setInterval(() => { reloj() }, 1000);
  }

  const iniciarCambioImagen = () => {
    setInterval(() => {
      if (Math.random() * 2 < 1.5) {
        setimagen(imagen1)
      } else {
        setimagen(imagen2)
        setTimeout(() => { setimagen(imagen1) }, 1950);
      }
    }, 30000);
  }

  const reloj = () => {
    let momento = new Date();
    let hora = "00" + String(momento.getHours());
    let minutos = "00" + String(momento.getMinutes());
    let segundos = "00" + String(momento.getSeconds());
    sethora(`${hora.slice(hora.length - 2, hora.length)} : ${minutos.slice(minutos.length - 2, minutos.length)} : ${segundos.slice(segundos.length - 2, segundos.length)}`);
  }



  return (
    <div className="App">
      <header className="App-header">
        <img style={{ width: '100vw', height: '100vh' }} src={imagen} className="App-logo" alt="logo" />
        <audio src={sonido} id="demo" type="audio/mp3" loop >
          no se puede reproducir
        </audio>
        <div onClick={() => { reproducir() }} style={{ display: 'block', position: 'absolute', top: '0', right: '0' }}>
          <svg class="bi bi-chevron-right" width="10em" height="10em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" /></svg>
        </div>
        <div onClick={() => { detener() }} style={{ display: 'block', position: 'absolute', top: '10em', right: '0' }}>
          <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>
        <div style={{ display: 'block', position: 'absolute', bottom: '0em', left: '0', fontSize: '9em', fontWeight: 'bold', textShadow: "2px 2px #5c6e91" }}>
          {hora}
        </div>
      </header>
    </div>
  );
}

export default App;

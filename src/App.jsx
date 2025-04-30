// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <h1 className="title">¿Quieres ir a verla conmigo?</h1>
//       <div className="image-container">
//         <img
//           src="https://i.pinimg.com/736x/ef/16/17/ef1617ac3df8bbefd3831924ac995a0d.jpg" 
//           alt="Imagen central"
//           className="main-image"
//         />
//         {/* Flores */}
//         <div className="flower flower1">🌸</div>
//         <div className="flower flower2">🌼</div>
//         <div className="flower flower3">🌷</div>
//         <div className="flower flower4">🌻</div>
//         <div className="flower flower5">💐</div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';

import imagenInicial from './assets/111.jpg';
import imagenSi from './assets/111.jpg';

function App() {
  const [respuesta, setRespuesta] = useState(null);

  // Selección dinámica de imagen
  const obtenerImagen = () => {
    if (respuesta === 'si') return imagenSi;
    return imagenInicial;
  };

  return (
    <div className="container">
      <h1 className="title">¿Quieres ir a verla conmigo?</h1>

      <div className="image-container">
        <img
          src={obtenerImagen()}
          alt="Imagen según respuesta"
          className="main-image"
        />
        {respuesta === null && (
          <>
            <div className="flower flower1">🌸</div>
            <div className="flower flower2">🌼</div>
            <div className="flower flower3">🌷</div>
            <div className="flower flower4">🌻</div>
            <div className="flower flower5">💐</div>
          </>
        )}
      </div>

      {respuesta === null && (
        <div className="buttons">
          <button onClick={() => setRespuesta('si')}>Sí 💖</button>
          <button onClick={() => setRespuesta('no')}>No 😢</button>
        </div>
      )}

      {respuesta === 'si' && <p className="respuesta">TE AMOOOOOO🤍</p>}
      {respuesta === 'no' && <p className="respuesta">Pos no vamos entonces.</p>}
    </div>
  );
}

export default App;

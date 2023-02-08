
import './App.css'; //importacion y ejecucion


// componentes a importar


import { Navbar } from '.Nav/Navbar'









/* 
  respetar los camel case para las etiquetas

class = className
<input type "text"> = <input type="text"/> //// notese la etiqueta de cierra en .jsx
(se tienen que cerrar las etiquetas)

lo que era insertar un texto con '${}' ahora es = solamente {}
DEFINIR VARIABLES SE HACE ENTRE LLAVES, por ejemplo input value={{{{{ "insertar texto"}}}} type="text"





*/




function App() {

  const ValDia = "Buenos días"
  return (
    <div>
      <Navbar/>
    </div>
  );

}




  


export const App;



import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import { useState } from "react";

export default function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    
  };
  return (
    <>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </>
  );
}

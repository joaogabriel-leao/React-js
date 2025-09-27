import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const times = [
    "Programação",
    "FrontEnd",
    "DataScience",
    "DevOps",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setCargo("");
    setImagem("");
    setNome("");
    setTime("");
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)} // Vai atualizar o valor da função aoAlterado toda vez que algo for digitado no input do componente CampoTexto
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;

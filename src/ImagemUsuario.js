import React from "react";

export default function ImagemUsuario(props) {
  const [foto, setFoto] = React.useState(props.imagem);

  return <img src={foto} onClick={() => {
    setFoto(prompt("Insira o link da sua nova foto de perfil"))
  }}></img>;
}
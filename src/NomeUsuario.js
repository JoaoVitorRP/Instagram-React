import React from "react";

export default function NomeUsuario(props) {
  const [nome, setNome] = React.useState(props.nome);

  return (
    <div class="texto">
      <strong>{props.arroba}</strong>
      <span>
        {nome}
        <ion-icon
          name="pencil"
          onClick={() => {
            setNome(prompt("Insira seu novo nome de usuário:"));
          }}
        ></ion-icon>
      </span>
    </div>
  );
}

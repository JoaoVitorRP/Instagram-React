import React from "react";

export default function DadosUsuario(props) {
  const [nome, setNome] = React.useState(props.nome);
  const [usuario, setUsuario] = React.useState(props.arroba);

  return (
    <div class="texto">
      <strong>{usuario}</strong>
      <span>
        {nome}
        <ion-icon
          name="pencil"
          onClick={() => {
            setUsuario(prompt("Insira seu novo usuário:"));
            setNome(prompt("Insira seu novo nome de usuário:"));
          }}
        ></ion-icon>
      </span>
    </div>
  );
}

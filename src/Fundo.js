import React from "react";

export default function Fundo(props) {
  const [curtidas, setCurtidas] = React.useState(props.numeroCurtidas);
  const [coracao, setCoracao] = React.useState("heart-outline");
  const [salvar, setSalvar] = React.useState("bookmark-outline");

  function AddCurtidas() {
    curtidas === props.numeroCurtidas
      ? setCurtidas(curtidas + 1)
      : setCurtidas(curtidas - 1);
  }

  function Preencher() {
    coracao === "heart-outline"
      ? setCoracao("heart")
      : setCoracao("heart-outline");
  }

  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon
            name={coracao}
            onClick={() => {
              AddCurtidas();
              Preencher();
            }}
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon
            name={salvar}
            onClick={() => {
              salvar === "bookmark-outline"
                ? setSalvar("bookmark")
                : setSalvar("bookmark-outline");
            }}
          ></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img
          src={`assets/img/${props.nomeCurtida}.svg`}
          alt={props.nomeCurtida}
        />
        <div class="texto">
          Curtido por <strong>{props.nomeCurtida}</strong> e{" "}
          <strong>outras {curtidas} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

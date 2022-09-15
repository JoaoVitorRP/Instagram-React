export default function Posts() {
  const post = [
    {
      nome: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      nomeCurtida: "respondeai",
      numeroCurtidas: "101.523",
    },
    {
      nome: "barked",
      conteudo: "assets/img/dog.svg",
      nomeCurtida: "adorable_animals",
      numeroCurtidas: "99.159",
    },
  ];

  return (
    <div class="posts">
      {post.map((obj) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={`assets/img/${obj.nome}.svg`} alt={obj.nome} />
              {obj.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={obj.conteudo} alt="post" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={`assets/img/${obj.nomeCurtida}.svg`} alt={obj.nomeCurtida} />
              <div class="texto">
                Curtido por <strong>{obj.nomeCurtida}</strong> e{" "}
                <strong>outras {obj.numeroCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

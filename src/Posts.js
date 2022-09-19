import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Posts() {
  const post = [
    {
      nome: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      nomeCurtida: "respondeai",
      numeroCurtidas: 101523,
    },
    {
      nome: "barked",
      conteudo: "assets/img/dog.svg",
      nomeCurtida: "adorable_animals",
      numeroCurtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {post.map((post) => (
        <div class="post">
          <Topo nome={post.nome} />

          <Conteudo conteudo={post.conteudo} />

          <Fundo
            nomeCurtida={post.nomeCurtida}
            numeroCurtidas={post.numeroCurtidas}
          />
        </div>
      ))}
    </div>
  );
}

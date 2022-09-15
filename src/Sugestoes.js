export default function Sugestoes() {
  const sugestao = [
    {
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestao.map((obj) => (
        <div class="sugestao">
          <div class="usuario">
            <img src={`assets/img/${obj.nome}.svg`} alt={obj.nome}/>
            <div class="texto">
              <div class="nome">{obj.nome}</div>
              <div class="razao">{obj.razao}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}

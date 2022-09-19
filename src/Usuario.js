import ImagemUsuario from "./ImagemUsuario";

import ArrobaUsuario from "./ArrobaUsuario";

import NomeUsuario from "./NomeUsuario";

export default function Usuario() {
  return (
    <div class="usuario">
      <ImagemUsuario imagem="assets/img/catanacomics.svg" />
      <div class="texto">
        <ArrobaUsuario arroba="catanacomics" />
        <NomeUsuario nome="Catana" />
      </div>
    </div>
  );
}

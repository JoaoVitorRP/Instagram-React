import ImagemUsuario from "./ImagemUsuario";

import DadosUsuario from "./DadosUsuario";

export default function Usuario() {
  return (
    <div class="usuario">
      <ImagemUsuario imagem="assets/img/catanacomics.svg" />
      <DadosUsuario arroba="catanacomics" nome="Catana" />
    </div>
  );
}

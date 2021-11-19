import React from 'react';

import './styles.scss'

function Footer() {
  const dev = " </gabrielgws>"
  return (
    <footer>
      Feito com <span role="img" arial-label="coração">❤️</span> por {dev} <br/>
      Direitos de imagem para Netflix <br/>
      Dados pegos do site Themoviedb.org
    </footer>
  );
}

export default Footer;
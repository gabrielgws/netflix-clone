import React from 'react';

import './styles.scss';

import loading from '../../assets/loading.gif'

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Carregando" />
    </div>
  );
}

export default Loading;
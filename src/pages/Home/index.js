import React from 'react';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x'
          alt='Tênis'
        />
        <strong>Tênis qualquer</strong>
        <span>R$19,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#FFF' />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

    </ProductList>
  )
}

export default Home;
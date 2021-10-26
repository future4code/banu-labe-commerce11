import React, { Component } from 'react';

import iconeCarrinho from '../img/cart.svg';
import iconeCoracao from '../img/heart.svg';

import {
  BotaoLogin,
  ConteudoHeader,
  GrupoBotoes,
  HeaderPrincipal,
  IconeCarrinho,
  IconeFavoritos,
  LogoHeader,
  TotalItens,
} from '../styles';

class Header extends Component {
  render() {
    return (
      <HeaderPrincipal>
        <ConteudoHeader>
          <LogoHeader>Ecommerce</LogoHeader>
          <GrupoBotoes>
            <div>
              <IconeFavoritos>
                <img src={iconeCoracao} alt='Coração' />
              </IconeFavoritos>
              <IconeCarrinho>
                <TotalItens>{this.props.totalItens}</TotalItens>
                <img
                  src={iconeCarrinho}
                  alt='Carrinho de compras'
                  onClick={this.props.abrirCarrinho}
                />
              </IconeCarrinho>
            </div>
            <BotaoLogin>Entrar</BotaoLogin>
          </GrupoBotoes>
        </ConteudoHeader>
      </HeaderPrincipal>
    );
  }
}

export default Header;

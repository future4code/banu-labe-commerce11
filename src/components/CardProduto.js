import React, { Component } from 'react';
import { Card, CardBotao, CardImagem, CardPreco, CardTitulo } from '../styles';

class CardProduto extends Component {
  render() {
    return (
      <Card>
        <CardImagem src={this.props.imagem} />
        <CardTitulo>{this.props.nome}</CardTitulo>
        <CardPreco>R$ {this.props.preco.toFixed(2)}</CardPreco>
        <CardBotao onClick={this.props.adicionarProdutoCarrinho}>
          Adicionar ao carrinho
        </CardBotao>
      </Card>
    );
  }
}

export default CardProduto;

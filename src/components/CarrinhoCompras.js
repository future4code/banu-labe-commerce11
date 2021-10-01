import React, { Component } from 'react';
import {
  BotaoFecharCarrinho,
  ContainerCarrinho,
  ConteudoCarrinho,
  ItemCarrinho,
  TotalCompra,
} from '../styles';

class CarrinhoCompras extends Component {
  calculaTotalCarrinho = (arrProdutos) => {
    let totalFinal = 0;

    for (const produto of arrProdutos) {
      totalFinal += produto.preco * produto.quantidade;
    }

    return totalFinal.toFixed(2).replace('.', ',');
  };

  calculaTotaPorProduto(preco, quantidade) {
    const total = (preco * quantidade).toFixed(2).replace('.', ',');

    return total;
  }

  render() {
    return (
      <ContainerCarrinho>
        <ConteudoCarrinho>
          <BotaoFecharCarrinho onClick={this.props.fecharCarrinho}>
            X
          </BotaoFecharCarrinho>
          {this.props.carrinho.length === 0 && (
            <p className='mensagem-carrinho'>Nenhum item no carrinho</p>
          )}

          {this.props.carrinho.map((produto, index) => (
            <ItemCarrinho key={index}>
              <div className='produto-info'>
                <img src={produto.imagem} alt={produto.nome} />
                <div>
                  <p>{produto.quantidade}x</p>
                  <p className='produto-nome'>{produto.nome}</p>
                  <p className='produto-preco'>
                    R${' '}
                    {this.calculaTotaPorProduto(
                      produto.preco,
                      produto.quantidade
                    )}
                  </p>
                </div>
              </div>
              <button onClick={() => this.props.removeItemCarrinho(produto.id)}>
                remover item
              </button>
            </ItemCarrinho>
          ))}
          <TotalCompra>
            Total:{' '}
            <span>R$ {this.calculaTotalCarrinho(this.props.carrinho)}</span>
          </TotalCompra>
        </ConteudoCarrinho>
      </ContainerCarrinho>
    );
  }
}

export default CarrinhoCompras;

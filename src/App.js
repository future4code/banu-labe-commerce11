import React from 'react';
import CardProduto from './components/CardProduto';
import CarrinhoCompras from './components/CarrinhoCompras';
import Header from './components/Header';
import { CardLista } from './styles';

import { listaDeProdutos } from './data/produtos';

class App extends React.Component {
  state = {
    produtos: listaDeProdutos,
    carrinho: [],
    carrinhoEstaAberto: false,
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('carrinho', JSON.stringify(this.state.carrinho));
  }

  componentDidMount() {
    const carrinhoComparas = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoComparas) {
      this.setState({
        carrinho: carrinhoComparas,
      });
    }
  }

  adicionarProdutoCarrinho = (id) => {
    const produtoNoCarrinho = this.state.carrinho.find(
      (produto) => id === produto.id
    );

    if (produtoNoCarrinho) {
      const novosProdutosNoCarrinho = this.state.carrinho.map((produto) => {
        if (id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }

        return produto;
      });

      this.setState({ carrinho: novosProdutosNoCarrinho });
    } else {
      const produtoParaAdicionar = this.state.produtos.find(
        (produto) => id === produto.id
      );
      this.setState({
        carrinho: [
          ...this.state.carrinho,
          { ...produtoParaAdicionar, quantidade: 1 },
        ],
      });
    }
  };

  abrirCarrinho = () => {
    this.setState({
      carrinhoEstaAberto: true,
    });
  };

  fecharCarrinho = (event) => {
    this.setState({
      carrinhoEstaAberto: false,
    });
  };

  removerItemCarrinho = (id) => {
    const novosProdutosNoCarrinho = this.state.carrinho
      .map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({
      carrinho: novosProdutosNoCarrinho,
    });
  };

  render() {
    return (
      <>
        {this.state.carrinhoEstaAberto && (
          <CarrinhoCompras
            carrinho={this.state.carrinho}
            fecharCarrinho={this.fecharCarrinho}
            removeItemCarrinho={this.removerItemCarrinho}
          />
        )}
        <Header
          abrirCarrinho={this.abrirCarrinho}
          totalItens={this.state.carrinho.length}
        />
        <CardLista>
          {this.state.produtos.map((produto) => (
            <CardProduto
              adicionarProdutoCarrinho={() =>
                this.adicionarProdutoCarrinho(produto.id)
              }
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              preco={produto.preco}
            />
          ))}
        </CardLista>
      </>
    );
  }
}

export default App;

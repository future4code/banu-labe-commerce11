import React from 'react';
import CardProduto from './components/CardProduto';
import CarrinhoCompras from './components/CarrinhoCompras';
import Header from './components/Header';
import { CardLista } from './styles';

import { listaDeProdutos } from './data/produtos';
import FiltroProdutos from './components/Filtro';

class App extends React.Component {
  state = {
    produtos: listaDeProdutos,
    carrinho: [],
    carrinhoEstaAberto: false,
    valorMinimo: '',
    valorMaximo: '',
    nome: '',
    ordenar: '',
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

  onChangeValorMinimo = (e) => {
    this.setState({ valorMinimo: e.target.value });
  };

  onChangeValorMaximo = (e) => {
    this.setState({ valorMaximo: e.target.value });
  };

  onChangeBuscarNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeOrdenar = (e) => {
    this.setState({ ordenar: e.target.value });
    console.log(this.state.ordenar);
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
        {/* Colocar componente de filtros abaixo desta linha */}
        <FiltroProdutos
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          nome={this.state.nome}
          onCahngeValorMinimo={this.onChangeValorMinimo}
          onChangeValotMaximo={this.onChangeValorMaximo}
          onChangeBuscarNome={this.onChangeBuscarNome}
          ordenar={this.state.ordenar}
          onChangeOrdenar={this.onChangeOrdenar}
        />
        <CardLista>
          {this.state.produtos
            .filter((produto) => {
              return produto.nome
                .toLowerCase()
                .includes(this.state.nome.toLowerCase());
            })
            .filter((produto) => {
              return (
                this.state.valorMinimo === '' ||
                produto.preco >= this.state.valorMinimo
              );
            })
            .filter((produto) => {
              return (
                this.state.valorMaximo === '' ||
                produto.preco <= this.state.valorMaximo
              );
            })
            .sort((valorAtual, proximoValor) => {
              switch (this.state.ordenar) {
                case 'nome':
                  return valorAtual.nome.localeCompare(proximoValor.nome);
                case 'precomaximo':
                  return proximoValor.preco - valorAtual.preco;
                default:
                  return valorAtual.preco - proximoValor.preco;
              }
            })
            .map((produto) => (
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

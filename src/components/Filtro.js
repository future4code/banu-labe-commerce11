import React from 'react';
import {
  FiltroContainer,
  FiltroGroup,
  FiltroInput,
  FiltroSelect,
} from '../styles';

class FiltroProdutos extends React.Component {
  /*Input controlado*/

  render() {
    return (
      <FiltroContainer>
        <FiltroGroup>
          <FiltroInput
            placeholder='Buscar por nome'
            value={this.props.nome}
            onChange={this.props.onChangeBuscarNome}
          />
          <FiltroInput
            placeholder='Valor mínimo' /*<= FiltroInput Controlado*/
            value={this.props.valorMinimo}
            onChange={this.props.onCahngeValorMinimo}
          />
          <FiltroInput
            placeholder='Valor maximo'
            value={this.props.valorMaximo}
            onChange={this.props.onChangeValotMaximo}
          />
        </FiltroGroup>
        <div>
          <label htmlFor='ordenar'>Ordenar por:</label>

          <FiltroSelect
            name='ordenar'
            value={this.props.ordenar}
            onChange={this.props.onChangeOrdenar}
          >
            <option selected disabled value=''>
              Selecione
            </option>
            <option value='nome'>Nome</option>
            <option value='precominimo'>Menor Preço </option>
            <option value='precomaximo'>Maior Preço </option>
          </FiltroSelect>
        </div>
      </FiltroContainer>
    );
  }
}

export default FiltroProdutos;

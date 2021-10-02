import styled from 'styled-components';

export const FiltroContainer = styled.div`
  padding: 60px 25px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FiltroGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const FiltroInput = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #c9c9c9;
  transition: all 0.2s ease;
  width: 100%;

  &:hover,
  &:focus {
    border-color: #0e233c;
  }
`;

export const FiltroSelect = styled.select`
  padding: 8px 10px;
  font-size: 16px;
  margin-left: 10px;
  outline: none;
  border: 1px solid #c9c9c9;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    border-color: #0e233c;
  }
`;

export const HeaderPrincipal = styled.header`
  min-height: 70px;
  background: #0e233c;
  display: flex;
  align-items: center;
  /* position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0; */
`;

export const ConteudoHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoHeader = styled.span`
  font-size: 24px;
  color: #fff;
  font-weight: 700;

  &:first-letter {
    color: #e30001;
  }
`;

export const GrupoBotoes = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const IconeCarrinho = styled.div`
  padding: 2px;
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background: #3d4e62;
  }

  img {
    width: 100%;
  }
`;
export const TotalItens = styled.div`
  display: block;
  position: absolute;
  top: -10px;
  right: -17px;
  width: 20px;
  height: 20px;
  background: #e30001;
  text-align: center;
  border-radius: 50%;
  font-size: 14px;
`;

export const IconeFavoritos = styled(IconeCarrinho)``;

export const BotaoLogin = styled.a`
  display: block;
  font-size: 16px;
  padding: 8px 20px;
  color: #fff;
  cursor: pointer;
  background: #e30001;
  transition: all 0.2s ease;

  &:hover {
    background: #3d4e62;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CardLista = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  row-gap: 20px;

  padding: 40px 0;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    place-items: center;
    row-gap: 20px;
  }

  @media (max-width: 400px) {
    padding: 40px 20px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #f1f1f1;

  @media (max-width: 600px) {
    max-width: 300px;
  }

  @media (max-width: 400px) {
    max-width: 90%;
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 230px;
  display: block;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const CardTitulo = styled.h4`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CardPreco = styled.span`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
`;

export const CardBotao = styled.button`
  font-size: 15px;
  padding: 5px 10px;
  display: block;
  cursor: pointer;
  background: none;
  border: none;
  border: 1px solid #c9c9c9;

  &:hover {
    background: #f1f1f1;
  }

  &:active {
    background: #e1e1e1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// Carrinho Compras

export const ContainerCarrinho = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(14, 35, 60, 67%);
  position: absolute;
  z-index: 1000;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 40px;
`;

export const ConteudoCarrinho = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px 10px 20px;
  position: relative;

  .mensagem-carrinho {
    font-size: 18px;
    text-align: center;
  }
`;

export const ItemCarrinho = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .produto-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .produto-info div {
    align-self: flex-end;
  }

  .produto-nome {
    font-weight: 400;
  }

  .produto-preco {
    font-size: 17px;
    font-weight: 600;
  }

  img {
    width: 100%;
    max-width: 80px;
    object-fit: cover;
  }

  button {
    background: none;
    border: none;
    padding: 5px 8px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2 ease;
    cursor: pointer;

    border: 1px solid #c9c9c9;

    &:hover {
      background: #f1f1f1;
    }

    &:active {
      background: #e1e1e1;
    }
  }
`;

export const TotalCompra = styled.div`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: green;

  span {
    font-weight: 600;
    color: initial;
  }
`;

export const BotaoFecharCarrinho = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: 1px solid #c9c9c9;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }

  &:active {
    background: #e1e1e1;
    font-weight: 400;
  }
`;

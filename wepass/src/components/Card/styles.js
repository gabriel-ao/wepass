import styled from 'styled-components';

export const Title = styled.div`
  //tamanho e cor do titulo
  font-size: 20px;
  font-weight: bolder;

  // adicionando os 3 pontinhos para um tamanho de texto grande
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  border: 0px solid #000000;

  /* background-color: orange; */

  @media screen and (max-width: 599px) {
    font-size: 12px;
    white-space: wrap; 
  }
`;

export const TextCard = styled.div`

  @media screen and (max-width: 599px) {
    height: 20px;
    font-size: 12px;
    overflow: hidden;

  }


  @media screen and (min-width: 600px) {
    height: 70px;
    overflow: hidden;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 5px;
  padding-top: 5px;
  padding-left: 2px;
  font-size: 16px;
  height: 110px;
  white-space: wrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  border: 0px solid #000000;
  /* background-color: orange; */

}
`;

export const DateCard = styled.div`

  @media screen and (max-width: 599px) {
    font-size: 12px;
    color: red;
  }
  
  @media screen and (min-width: 600px) {
    font-size: 14px;
    color: red;
  }
`;

export const ConfigurationButtons = styled.div`

    @media screen and (max-width: 599px) {
    display: flex;
    justify-content: space-around;
    margin-top: auto;

    /* margin-top: 40px */
  }

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    /* background-color: #000 */

  }

`;
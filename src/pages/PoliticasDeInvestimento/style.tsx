import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface TransacaoProps{
  entrada: boolean;
}

interface ContaInfoProps{
  status?: string | boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  /* max-width: 450px; */
  line-height: 56px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Section = styled.section`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;

  font-family: 'Roboto';
  font-size: 20px;
  line-height: 30px;

  &+&{
    margin-top: 24px;
  }

  header {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
    padding: 8px 0;
    border-bottom: 2px solid #3a3a3a;

    /* background: #F6E645; */
  }

  > div {
    /* margin: 8px 0; */
    /* border: 2px solid #3a3a3a; */
    border-radius: 8px;

    div {
      display: flex;
      background-color: #d6d6d6;
      /* margin: 4px 0; */
      /* padding: 4px 0; */
      /* border: 0.5px solid #3a3a3a; */
      /* border-radius: 4px; */

      input{
        border: none;
        background: transparent;
        margin: 0 8px;
        font-size: 20px;
        font-family: 'Roboto';
        max-width: 75px;
        border-right: 4px solid #fff;
        display: flex;

      }

      &:nth-child(even){
        background: #5e5e5e;
        color: #fff;

        input{
        color: #fff;
        }
      }


    }

    header {
      border-top: 2px solid #3a3a3a;
    }

    textarea {
      /* margin-top: 12px; */
      background-color: #d6d6d6;
      border: 2px solid #3a3a3a;
      border-top: 0;
      border-radius: 0 0 8px 8px;
      width: 100%;
      min-height: 100px;
      font-size: 20px;
      font-family: 'Roboto';
      padding: 4px;

    }
  }

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3d3d4d;
    transition: color 0.3;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const ContaInfo = styled.section<ContaInfoProps>`
  margin: 80px 0;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    align-items: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        font-size: 18px;
        font-weight: 300;
      }

      button{
        cursor: pointer;
        border: none;
        border-radius: 8px;
        padding: 8px;
        font-size: 20px;
        font-weight: 400;

        ${(props) => props.status ? css`
          color: #f0f0f5;
          background: #c53030;
          transition: 0.3s;

          &:hover{
            background: ${shade(0.2, '#c53030')}
          }
        ` :
        css`
          color: #f0f0f5;
          background: #04d361;
          transition: 0.3s;

          &:hover{
            background: ${shade(0.2, '#04d361')}
          }
        `}


      }
    }
  }
`;

export const Transacao = styled.div<TransacaoProps>`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + div {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  strong {
    font-size: 20px;

    ${(props) => props.entrada ? css`
      color: #04d361;
    ` : css`
      color: #c53030;
    `}


  }

  p {
    font-size: 18px;
    color: #a8a8b3;
  }
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  h2 {
    font-size: 36px;
    color: #3d3d4d;
  }

  > div {
    margin: 12px 0;
    width: 100%;
    display: flex;


    > div {
      display: flex;
      flex-direction: column;

      > div {
        & + div {
          margin-top: 4px;
        }

        display: flex;

        span {
          border-radius: 5px 0 0 5px;
          background: #3a3a3a;
          border: 2px solid #3a3a3a;
          color: #fff;
          height: 40px;
          padding: 8px;
          width: 100px;
        }
      }
    }
  }



  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 2px solid #fff;
    /* border-radius: 5px 0 0 5px; */
    color: #3a3a3a;
    border-right: 0;
    border-left: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    padding: 8px;
    height: 84px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 2px solid #04d361;
    border-left: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &::placeholder {
      color: #a8a8b3;
    }

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.div`
  display: flex;
  color: #c53030;
  margin-top: 8px;
  align-items: center;
  svg {
    margin-left: 8px;
  }
`;

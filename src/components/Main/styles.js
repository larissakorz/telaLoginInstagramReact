import styled from "styled-components";

export const Container = styled.main`
  width: 630px;
  height: 500px;
  margin-left: 80px;
  margin-top: 10px;

  .container{
    display: flex;
  }

  .primeiraDiv{
    width: 100%;
    height: 500px;
  }

  .segundaDiv{
    width: 275px;
    height: 500px;
  }

  .login{
    background: white;
    border: 1px rgb(231, 229, 229) solid;
    width: 275px;
    height: 335px;
  }

  .logo img{
    max-width:150px;
    max-height:150px;
    width: auto;
    height: auto;
  }

  .logo{
    margin-top: 40px;
  }

  .inputs{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 33px;
  }

  input::placeholder{
    font-size: 10px;
  }

  input, button{
    padding: 5px;
    border-radius: 3px;
    width: 210px;
  }

  input{
    margin-bottom: 4px;
    height: 19px;
    border: 0.5px rgb(187, 179, 179) solid;
    background: rgb(250, 245, 245);
    width: 197px;
  }

  button{
    margin-top: 5px;
    height: 25px;
    font-size: 12px;
    background: rgb(93, 146, 245);
    color: rgb(252, 247, 247);
    border: none;
    border-radius: 7px;
  }

  .linhas{
    display: flex;
    margin: 14px 35px;
  }

  .linha1, .linha2{
    width: 80px;
    height: 1px;
    margin-top: 11px;
    background: rgb(187, 179, 179);
  }

  .linha1{
    margin-right: 15px;
  }

  .linha2{
    margin-left: 15px;
  }

  .ou{
    font-size: 14px;
    color: rgb(187, 179, 179);
  }

  .outros{
    padding: 15px;
    margin-top: -5px;
  }
  
  .face{
    font-size: 12px;
    color: rgb(84, 83, 170);
    margin-left: 7px;
  }
  
  .senha{
    font-size: 10px;
    margin: 20px 40px;
  }
  
  .conta{
    height: 45px;
    width: 275px;
    border: 1px solid rgb(223, 215, 215);
    margin-top: 10px;
    background: white;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  strong{
    margin-left: 5px;
    color: rgb(93, 146, 245);;
  }
  
  .google img{
    width: 37%;
    margin-right: 5px;
  }
  
  .google{
    width: 275px;
    height: 45px;
    margin-top: 8px;
  }
  
  .logos{
    margin-left: 10px;
  }
  
  .final{
    font-size: 10.5px;
    margin-top: 10px;
    margin-left: 5px;
  }
  
  .google #img2{
    width: 34%;
  }

  .emoji img{
    max-width:15px;
    max-height:15px;
    width: auto;
    height: auto;
  }

  .emoji{
    display: flex;
    margin-left: 50px;
  }
`;


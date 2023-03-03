import React from 'react';

import { Container  } from "./styles";
import celular from "./Imagens/celular.png";
import logo from './Imagens/logo.png';
import googlePlay from "./Imagens/googlePlay.png";
import microsoft from './Imagens/microsoft.png';
import facebook from './Imagens/facebook.png';

export default function Main(){
  return(
    <Container>
      <div className='container'>
        <div className='primeiraDiv'>
          <div className='celular'>
            <img src={celular} alt='fotoCelular'/>
          </div>
        </div>

        <div className='segundaDiv'>
          <div className='login'>
            <div className='logo'>
               <img src={logo} alt='fotoLogo'/>
            </div>
            <div className='inputs'>
              <input type="text" placeholder='Telefone, nome de usuário ou email'/>
              <input type="password" placeholder='Senha'/>
              <button>Entrar</button>
            </div>
            <div className='linhas'>
              <div className='linha1'></div>
              <div className='ou'>ou</div>
              <div className='linha2'></div>
            </div>

            <div className='outros'>
              <div className='emoji'>
                <img src={facebook} alt="facebook"/>
                <div class="face">Entrar com o Facebook</div>
              </div>
              
              <div class="senha">Esqueceu a senha?</div>
            </div>
          </div>

          <div class="conta">Não tem uma conta? <strong> Cadastra-se</strong></div>

          <div class="final">
            <p>Obtenha o aplicativo</p>
          </div>

          <div class="google">
            <div class="logos">
              <img src={googlePlay} alt="googlePlay"/>
              <img id="img2" src={microsoft} alt="microsoft"/>
            </div>
          </div>

        </div>
      </div>
    </Container>
  )
}
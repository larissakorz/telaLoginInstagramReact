import styled from "styled-components";

export const Container = styled.footer`
  height: 80px;
  width: 800px;

  .footer, .port{
  font-size: 10px;
  color: rgb(165, 162, 162);
  display: flex;
  justify-content: center;
  }

  .footer p{
    margin-left: 10px;
  }

  .port{
    margin-top: -8px;
  }

  .port p{
    margin-left: 10px;
  }

  footer{
    margin-bottom: 50px;
    bottom: 0;
    left: 0;
    height: 40px;
    position: fixed;
    width: 100%;
  }
`;
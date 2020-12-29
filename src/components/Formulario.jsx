import React from "react";
import styled from "@emotion/styled";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #326ac0;
  }
`;
const Formulario = () => {
  return (
    <form>
      <Boton type="submit" value="Calcular"></Boton>
    </form>
  );
};

export default Formulario;

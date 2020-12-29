import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import Error from "./Error";

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
const Formulario = ({ setCriptomoneda, setMoneda }) => {
  const [criptomonedas, setCriptomonedas] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de estados unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  const [moneda, SelectMonedas] = useMoneda("Elige tu Moneda", "", MONEDAS);
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoenda",
    "",
    criptomonedas
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const cotizarMoneda = (e) => {
    e.preventDefault();
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }
    setMoneda(moneda);
    setCriptomoneda(criptomoneda);
    setError(false);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error && <Error mensaje="Todos los campos son obligatorios" />}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular"></Boton>
    </form>
  );
};

export default Formulario;

import React, { Fragment, useState } from "react";

const useMoneda = () => {
  const [state, setState] = useState("");

  const Seleccionar = () => (
    <Fragment>
      <label>Moneda</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </Fragment>
  );

  return [state, Seleccionar, setState];
};

export default useMoneda;

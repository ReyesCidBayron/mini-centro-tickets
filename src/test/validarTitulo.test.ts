import {
  describe,
  expect,
  test,
} from "vitest";

import {
  validarTitulo,
} from "../utils/validarTitulo";


describe(
  "validar titulo de ticket",
  () => {


    test(
      "acepta títulos con 5 o más caracteres",
      () => {

        const resultado =
          validarTitulo(
            "Error de red"
          );


        expect(resultado)
          .toBe(true);

      }
    );



    test(
      "rechaza títulos menores a 5 caracteres",
      () => {

        const resultado =
          validarTitulo(
            "abc"
          );


        expect(resultado)
          .toBe(false);

      }
    );


  }
);
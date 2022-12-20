import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg"
import ThemeOff from "../../assets/images/themeOff.svg"
import { Icone } from "../Ui"

const claro = < Icone src={ThemeOn} alt="Tema claro" />
const escuro = < Icone src={ThemeOff} alt="Tema Escuro" />

export default (({ tema }) =>
    (tema ? escuro : claro)
)
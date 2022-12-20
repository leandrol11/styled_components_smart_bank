import React from "react"
import { extratoLista } from "../../info"
import Itens from "../Itens"
import { Botao, Box } from "../Ui"

const Extrato = () => {
    return (
        <Box>
            {
                extratoLista.updates.map(({ id, type, from, value, date }) => {
                    return (
                        <div key={id}>
                            <Itens
                                key={id}
                                type={type}
                                from={from}
                                value={value}
                                date={date}
                            >
                            </Itens>
                        </div>
                    )
                })
            }
            <Botao>Ver mais</Botao>
        </Box>
    )
}

export default Extrato
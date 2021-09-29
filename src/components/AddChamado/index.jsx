import React, { useState } from 'react'
import * as S from './styles'

const AddChamado = () => {

    const currentTimestamp = new Date().getTime()

    const [chamadoData, setChamadoData] = useState({
        equipamento: "",
        solicitante: "",
        tipo_servico: 3,
        problema: 5,
        observacoes: "texto gerado aleatoriamente com até 100 palavras", 
        data_criacao: currentTimestamp, 
        id_tipo_ordem_servico: 1
    })

    const handleInputChange = (e,property) => { 

        switch (property) {
            case "equipamento":
                setChamadoData({...chamadoData, equipamento:e.target.value})
                break;
            case "solicitante":
                setChamadoData({...chamadoData, solicitante:e.target.value})
                break;
            case "problema":
                setChamadoData({...chamadoData, problema:e.target.value})
                break;
            
        }

       
    }



    return (
        <S.Wrapper>
            <h1>Novo chamado</h1>

            <S.InputBox>
                <span>Número do equipamento:</span>
                <input type="text" onChange={e=>handleInputChange(e,"equipamento")}/>
                <span>Solicitante:</span>
                <input type="text" onChange={e=>handleInputChange(e,"solicitante")}/>
                <span>Problema:</span>
                <input type="number" onChange={e=>handleInputChange(e,"solicitante")}/>
            </S.InputBox>            
        </S.Wrapper>
    )
}

export default AddChamado

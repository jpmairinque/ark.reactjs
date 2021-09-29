import React, { useState } from 'react'
import * as S from './styles'
import {postChamado} from '../../services'

const AddChamado = () => {

    const currentTimestamp = new Date().getTime()

    const [chamadoData, setChamadoData] = useState({
        equipamento: 0,
        solicitante: 0,
        tipo_servico: 3,
        problema: 5,
        observacoes: "texto gerado aleatoriamente com até 100 palavras", 
        data_criacao: currentTimestamp, 
        id_tipo_ordem_servico: 1
    })

    const handleSubmit = async() => {
        await postChamado(chamadoData)
    }

    const handleInputChange = (e,property) => { 

        switch (property) {
            case "equipamento":
                setChamadoData({...chamadoData, equipamento:e.target.value})
                break;
            case "solicitante":
                setChamadoData({...chamadoData, solicitante:e.target.value})
                break;
            case "observacoes":
                setChamadoData({...chamadoData, observacoes:e.target.value})
                break;
            
        }

       
    }



    return (
        <S.Wrapper>
            <h1 onClick={handleSubmit}>Novo chamado</h1>

            <S.InputBox>
                <span>Número do equipamento:</span>
                <input type="text" onChange={e=>handleInputChange(e,"equipamento")}/>
                <span>Solicitante:</span>
                <input type="text" onChange={e=>handleInputChange(e,"solicitante")}/>
                <span>Observações:</span>
                <input type="text" onChange={e=>handleInputChange(e,"observacoes")}/>
            </S.InputBox>            
        </S.Wrapper>
    )
}

export default AddChamado

import React, { useState } from 'react'
import * as S from './styles'
import {postChamado} from '../../services'

const AddChamado = ({setChamadoModal}) => {

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
    const [res, setRes] = useState(null)
    const [errorMsg, setErrorMsg] = useState("")

    

    const handleSubmit = async() => {
        const resCall = await postChamado(chamadoData)
        setRes(!resCall.result)
        setErrorMsg(resCall.msg)
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
            <h1 >Novo chamado</h1>

            <S.InputBox>
                <span>Número do equipamento:</span>
                <input type="text" onChange={e=>handleInputChange(e,"equipamento")}/>
                <span>Solicitante:</span>
                <input type="text" onChange={e=>handleInputChange(e,"solicitante")}/>
                <span>Observações:</span>
                <input type="text" onChange={e=>handleInputChange(e,"observacoes")}/>
            </S.InputBox> 

            <S.DoneButton onClick={handleSubmit} >Pronto</S.DoneButton>      
            <S.DoneButton onClick={()=>setChamadoModal(false)}>Voltar</S.DoneButton>  
            <S.ErrorMsg success={res} className="slide-top">{errorMsg}</S.ErrorMsg> 
        </S.Wrapper>
    )
}

export default AddChamado

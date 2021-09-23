import React from 'react'
import * as S from './styles'



const ChamadoCard = ({ticket}) => {
    return (
       <S.Wrapper>
           <h3>CH {ticket.id}</h3>
           <span>Equipamento {ticket.equipamento_id}</span>
           <span>Num {ticket.numero}</span>
           <span>{ticket.proprietario_nome} {ticket.proprietario_apelido && <span>({ticket.proprietario_apelido})</span>}</span>

       </S.Wrapper>
    )
}

export default ChamadoCard

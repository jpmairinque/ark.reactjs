import React from 'react'
import Row from './Row'
import * as S from './styles'

const ChamadosTable = ({chamados}) => {
    return (
        <S.Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Equipamento</th>
                    <th>NumeroCh</th>
                    <th>Proprietário</th>
                </tr>
            </thead>
            <tbody>
            {chamados.map((ticket, key)=>{return <Row key={key} ticket={ticket}/>})}
            </tbody>
        </S.Table>
    )
}

export default ChamadosTable

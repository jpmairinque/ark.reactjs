import React from 'react'
import Row from './Row'

const ChamadosTable = ({chamados}) => {
    return (
        <table>
            <tr>
                <td>Id</td>
                <td>Equipamento</td>
                <td>NumeroCh</td>
                <td>Proprietário</td>
            </tr>
            {chamados.map((ticket, key)=>{return <Row ticket={ticket}/>})}
        </table>
    )
}

export default ChamadosTable

import React from 'react'

const Row = ({ticket}) => {
    return (
    <tr>
        <td>{ticket.id}</td>
        <td>{ticket.equipamento_id}</td>
        <td>{ticket.numero}</td>
        <td>{ticket.proprietario_nome}</td>
    </tr>
    )
}

export default Row

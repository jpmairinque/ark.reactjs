import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { getMoreEquipments, getMoreChamados } from '../../services'



const Header = ({setChamadoModal}) => {

    const [moreEquipId, setMoreEquipId] = useState()
    const [moreEquipQuant, setMoreEquipQuant] = useState()
    const [moreChamId, setMoreChamId] = useState()
    const [moreChamQuant, setMoreChamQuant] = useState()

    useEffect(() => {

        const fetch = async() => {

            const fetchedMoreEquip = await getMoreEquipments()
            const fetchedMoreCham = await getMoreChamados()

            console.log(fetchedMoreEquip[0])
            
            setMoreEquipId(fetchedMoreEquip[0])
            setMoreEquipQuant(fetchedMoreEquip[1])
            setMoreChamId(fetchedMoreCham[0])
            setMoreChamQuant(fetchedMoreCham[1])
        }

        fetch()
        
           
        }, [])

    return (
        <S.Nav>
            <S.MoreBox>
               <h1>{moreEquipQuant}</h1> 
               <section>
                    <span className="uptext">Proprietario com mais equipamentos:  </span>
                    <span className="compId">({moreEquipId})</span>
                </section>
            </S.MoreBox>
            <h2 onClick={()=>{setChamadoModal(true)}}>Adicionar chamado</h2>
            <S.MoreBox>
                    
                    <h1>{moreChamQuant}</h1> 
                    <section>
                        <span className="uptext">Equipamento com mais chamados: </span>
                        <span className="compId">{moreChamId}</span>
                    </section>
            </S.MoreBox>

            
            
        </S.Nav>
    )
}

export default Header

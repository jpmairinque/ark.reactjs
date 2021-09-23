import React from 'react'
import { getChamados } from '../../services'
import { useState, useEffect } from 'react'
import ChamadoCard from '../ChamadoCard'
import Header from '../Header'
import Loading from '../Loading'

import * as S from './styles'

const Chamados = () => {

    

    const [chamados, setChamados] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)   

        const fetch = async () => {
            const fetchedChamados = await getChamados()
            setChamados(fetchedChamados)
            setLoading(false)    
        }

        fetch()          
       
    }, [])


    return (
        
        <>
            {loading ? <Loading/> : 
            <>
                <Header/>
                <S.Wrapper>
                    {chamados.map((ticket, key)=>{return <ChamadoCard key={key} ticket={ticket} />})}
                </S.Wrapper>
            </> }
           
        </>
    )
}

export default Chamados

import React from 'react'
import { getChamados } from '../../services'
import { useState, useEffect } from 'react'
import Header from '../Header'
import Loading from '../Loading'
import ChamadosTable from '../ChamadosTable'
import AddChamado from '../AddChamado'

import * as S from './styles'

const Chamados = () => {

    

    const [chamados, setChamados] = useState([])
    const [loading, setLoading] = useState(true)
    const [chamadoModal, setChamadoModal] = useState(false)

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
        {loading ? <Loading/> : chamadoModal ? <AddChamado setChamadoModal={setChamadoModal}/> :
        
            <>
                <Header setChamadoModal={setChamadoModal}/>
                <S.Wrapper>
                    <ChamadosTable chamados={chamados}/>
                </S.Wrapper>
            </>
        
        
        }
       </>
        
        
        

    )
}

export default Chamados

import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import * as S from './styles'

const Loading = () => {

    const [fetchCount, setFetchCount] = useState(false)

    useEffect(()=>{

        setTimeout(()=>{

            setFetchCount(true)
        
        }, 5000);

    },[])         

    return (
    <S.Wrapper>
        <S.Loader/>
     {fetchCount ? <h1>Provavelmente o servidor backend está desativado! Inicie-o e recarregue o app</h1> : <h1>Carregando</h1> }
     </S.Wrapper>
    )
}

export default Loading

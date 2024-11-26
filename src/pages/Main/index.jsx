import React from 'react'
import * as S from './index.style'
import redPikmin from '../../assets/redPikmin.jpeg'

import Header from '../../components/Header'
import Explanation from '../Explanation'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate('../Explanation')
  };

  return (

    <S.backgroundImg>
      <Header/>
      <S.boxContainer>
        <S.Box>
          <S.redPikminImg 
            src={redPikmin}
            onClick={() => navigate('../Explanation')}
          ></S.redPikminImg>
        </S.Box>
        <S.Box></S.Box>
        <S.Box></S.Box>
      </S.boxContainer>
        
    </S.backgroundImg>
  )
}

export default Main

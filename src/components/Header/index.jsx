import React from 'react'
import * as S from './index.style'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <S.HeaderBox>
        <S.Logo onClick={()=> navigate('/')} src={logo}></S.Logo>
        </S.HeaderBox>
    )
}

export default Header

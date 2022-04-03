import React from 'react'
import { useRecoilState } from 'recoil'
import { FiSun } from 'react-icons/fi'
import { RiMoonClearLine } from 'react-icons/ri'

import { H2, ThemeButton, Span } from './styles/Header'
import { isLightTheme } from './recoil/RootState'

const Header = () => {
    const [isLight, setIsLight] = useRecoilState(isLightTheme)

    const toggleTheme = () => {
        setIsLight(!isLight)
        localStorage.setItem('isLight', !isLight)
    }
    return (
        <>
            <ThemeButton theme={isLight} onClick={() => toggleTheme()}>
                <Span>Enable {!isLight ? 'Light' : 'Dark'} Theme</Span>
                {!isLight ? <FiSun /> : <RiMoonClearLine/>}
            </ThemeButton>
            <H2>Tic Tac Toe</H2>
        </>
    )
}

export default Header
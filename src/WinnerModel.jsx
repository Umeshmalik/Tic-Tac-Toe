import React from 'react'
import { useRecoilValue } from 'recoil'

import { WinnerModel as Model, Button } from './styles/WinnerModel'
import { isLightTheme } from './recoil/RootState'

const WinnerModel = (props) => {
    const isLight = useRecoilValue(isLightTheme)
    return (
        <Model show={props?.show}>
            <h1> {props?.winner == "X" ? "O" : "X"}  Won</h1>
            <Button theme={isLight} onClick={() =>props?.onClick()}>Play Again</Button>
        </Model>
    )
}

export default WinnerModel
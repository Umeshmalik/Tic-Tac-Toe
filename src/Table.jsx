import React from 'react'
import { GiCrossedAxes } from "react-icons/gi";
import { FaCrosshairs } from "react-icons/fa";
import Confetti from 'react-confetti';

import { TableWrapper, Table, TD, TR, TBody } from './styles/Table'
import WinnerModel from './WinnerModel'

const GameTable = () => {
    const [board, setBoard] = React.useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    const [dummyBoard, setDummyBoard] = React.useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])
    const [turn, setTurn] = React.useState(<GiCrossedAxes />)
    const [isMatchOver, setIsMatchOver] = React.useState(false)

    const getWindowSize = () => {
        const w = window.innerWidth
        const h = window.innerHeight
        return { w, h }
    }

    const captureClick = (row, col) => {
        if (board[row][col] !== "") return
        const newBoard = [...board]
        const newDummyBoard = [...dummyBoard]
        newBoard[row][col] = turn === "X" ? <GiCrossedAxes /> : <FaCrosshairs />
        newDummyBoard[row][col] = turn === "X" ? "X" : "O"
        setBoard(newBoard)
        setDummyBoard(newDummyBoard)
        const winner = checkWinner();
        if (winner) {
            setIsMatchOver(true)
        }
        setTurn(turn === "X" ? "O" : "X")
    }

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i]
            const ax = a % 3;
            const ay = Math.floor(a / 3);
            const bx = b % 3;
            const by = Math.floor(b / 3);
            const cx = c % 3;
            const cy = Math.floor(c / 3);
            if (dummyBoard[ay][ax] === dummyBoard[by][bx] && dummyBoard[ay][ax] === dummyBoard[cy][cx] && dummyBoard[ay][ax] !== "") {
                return turn === "X" ? "X" : "O"
            }
        }
        return ""
    }

    const restartGame = () => {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ])
        setDummyBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ])
        setIsMatchOver(false)
    }


    return (
        <TableWrapper>
            <Table >
                <TBody>
                    {
                        board?.map((row, rowIndex) =>
                            <TR key={rowIndex}>{row?.map((cell, cellIndex) =>
                                <TD key={`${rowIndex}-${cellIndex}`} onClick={() => captureClick(rowIndex, cellIndex)}>
                                    {cell}
                                </TD>)}
                            </TR>
                        )
                    }
                </TBody>
            </Table>
            {isMatchOver &&
            <>
                <Confetti
                    width={getWindowSize().w}
                    height={getWindowSize().h}
                    numberOfPieces={500}
                    recycle={false}
                    />
                <WinnerModel show = {isMatchOver} winner = {turn} onClick = {restartGame}/>
            </>
            }
        </TableWrapper>
    )
}

export default GameTable
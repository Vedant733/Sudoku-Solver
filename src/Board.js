import React from 'react'
import Cell from './Cell'

function Board({ board, setBoard }) {
    return (
        <div >
            {board.map((item, index) => {
                return <React.Fragment key={Math.random()}>{item.map((it, ind) => {
                    return <Cell key={Math.random()} it={it} setBoard={setBoard} i={index} j={ind} />
                })}<br /></React.Fragment >
            })}
        </div>
    )
}

export default Board
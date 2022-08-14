import React from 'react'

function Cell({ it, setBoard, i, j }) {
    return (
        <div style={{ display: 'inline' }} key={Math.random()}>
            <input type="number" key={Math.random()} style={{ width: '50px', height: '50px', fontSize: '14px' }} value={it} onChange={(e) => {
                if (parseInt(e.target.value) > 9 || parseInt(e.target.value) <= 0) {
                    alert("Invalid input")
                    return
                }
                setBoard(prev => {
                    prev[i][j] = e.target.value;
                    return [...prev];
                })
            }} />
        </div>
    )
}

export default Cell
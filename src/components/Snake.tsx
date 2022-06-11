

interface SnakeProps {
    snakeDots:number[][]
}

export default function Snake(props: SnakeProps) {


    return (
        <div>
            {props.snakeDots.map((dot, index , row) => {
                const styleDot = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div key={index}> {index+1 === row.length ? <div className="snake-dot-head" key={index} style={styleDot}/> : <div className="snake-dot" key={index} style={styleDot}/>}</div>
                  
                )
            })}
        </div>
    )
}
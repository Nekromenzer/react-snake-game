import { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

interface InfoScoreProps {
    score: number,
    isPause: boolean,
}

export default function InfoScore(props: InfoScoreProps) {
    const [bestScore, setBestScore] = useLocalStorage("bestScore", 0)
    useEffect(() => {
        if (props.score > bestScore) {
            setBestScore(props.score)
        }
    },[bestScore, props.score, setBestScore])
    return (
        <div className={`${props.isPause ? 'text-yellow-200' : 'text-blue-900'} opacity-50 p-2 flex justify-between`}>
            <span className="">Current Score : {props.score}</span>
            <span className="">Best Score : {bestScore}</span>
        </div>
    )
}
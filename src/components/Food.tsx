/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

interface FoodProps {
    dot: number[],
    score:number
}

function Food(props: FoodProps) {
    const [currentFood , setCurrentFood] = React.useState("");
    const foodClassNameArray = ['food-1','food-2','food-3','food-4'];

    const randomFoodClassName = ()=>{
        setCurrentFood(foodClassNameArray[Math.floor(Math.random() * foodClassNameArray.length)]);
    }

    React.useEffect(() => {
        randomFoodClassName();
    }, [props.score])
    const styleFood = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    return (
        <div className={`snake-food animate-bounce ${currentFood}`} style={styleFood}>
        </div>
    )
}

export default React.memo(Food);
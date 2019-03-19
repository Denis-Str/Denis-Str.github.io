import React from 'react'
import GoodCart from '../goodCard/goodCard'
import './styleList.css'

export default function GoodList({goods}) {
    const goodElement = goods.map(good =>
        <li key={good.id}>
            < GoodCart card = {good} />
        </li>
    );

    return (
        <ul className = 'cardList container d-flex card-body flex-wrap'>
            {goodElement}
        </ul>
    )
}
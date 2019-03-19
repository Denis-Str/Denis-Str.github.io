import React from 'react'
import GoodList from './components/goodList/goodList'
import GoodFiltr from './components/goodFiltr/goodFiltr'
import goods from   './goods'
import 'bootstrap/dist/css/bootstrap.css'


export default function App() {
    return(
        <div className = 'container'>
            <GoodFiltr />
            <GoodList goods = {goods} />
        </div>
        
    )
}
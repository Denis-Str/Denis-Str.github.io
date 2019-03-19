import React, {Component} from 'react'

export default class GoodFiltr extends Component {
    render() {
        return (
            <div className = 'goodList_filtr d-flex justify-content-around card-header'>
                <p className = 'goodTitle'>Сортировка:</p>
                <button className = 'goodPrise btn btn-primary'>по цене</button>
                <button className = 'goodType btn btn-primary'>по типу</button>
                <button className = 'goodFunctionality btn btn-primary'>по функционалу</button>
                <button className = 'foodSort btn btn-primary'>Сортировка</button>
            </div>
        )
    }
}

// function GoodFiltr() {
//     return (
//         <div className = 'goodList_filtr'>
//             <p className = 'goodTitle'>Сортировка:</p>
//             <button className = 'goodPrise'>по цене</button>
//             <button className = 'goodType'>по типу</button>
//             <button className = 'goodFunctionality'>по функционалу</button>
//             <button>Сортировка</button>
//         </div>
//     )
// }

// export default GoodFiltr
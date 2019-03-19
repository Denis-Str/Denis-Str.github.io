import React, {Component} from 'react'
import './styleCard.css'

export default class GoodCard extends Component {
    state = {
        isOpen: false
    };

    render () {
        const {card} = this.props;
        const popup = this.state.isOpen && <div className='d-flex flex-column position-absolute align-self-center'>
                            <p className='btn btn-primary'>Купить</p>
                            <p className='btn btn-primary'>В закладки</p>
                        </div>;
        return (
            <div className = 'goodItem card'>
                <a href = {'someValidPath'}>
                    <img src={card.image} alt={card.model} className='card-img'/>
                </a>
                <h3 className='card-title text-center text-info'>{card.model}</h3>
                <div className='card-text text-center'><del>{card.oldPrice}</del></div>
                <div className='card-text text-center btn btn-primary' onClick={this.handleClick}>{card.price}</div>
                {popup}
            </div>  
        )  
    }

    handleClick = () => {
        console.log('---', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

// function GoodCard () {
//     return (
//         <div className = 'goodCard'>
//             <ul className = 'card_list'>
//                 <li className = 'card_item'>
//                     <a href = {'someValidPath'}>
//                         <img src={'https://via.placeholder.com/218x169.png?text=Image+Good'} alt={'good'}/> 
//                     </a>
//                     <h3>Пефоратор модель</h3>
//                     <div><del>Старая цена</del></div>
//                     <div>Ценая</div>
//                 </li>
//             </ul>
//         </div>
//     )
// }
// export default GoodCard



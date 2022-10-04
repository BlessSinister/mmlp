import React from 'react';
import alkogan from './alkogan_slider.jpg'




class Slider extends React.Component {
    render() {
        return (<div className='main-container'>
            <div className='data-slider-style'>
                <img src={alkogan} alt="" className='slider-container' />
            </div>
            <div className="block-container">
                <div className='block-container-position'>
                    <h2 className="slider-h2">Время <span>подарков</span> в Магазине моих лучших покупок!</h2>
                    <a href='$'>
                        <button className='data-slider-btn data-slider-btn-1'>Правила участия</button>
                    </a>
                    <a href='$'>
                        <button className='data-slider-btn data-slider-btn-2'>Принять участие в Акции </button>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}
export default Slider
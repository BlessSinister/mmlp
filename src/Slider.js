import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div className="slider-container">
                <div className='slide-container-position'>
                    <h2 className="slider-h2">Время <span>подарков</span> в Магазине моих лучших покупок!</h2>
                    <a href='$'>
                        <button className='data-slider-btn data-slider-btn-1'>Правила участия</button>
                    </a>
                    <a href='$'>
                        <button className='data-slider-btn data-slider-btn-2'>Принять участие в Акции -&gt;</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Slider
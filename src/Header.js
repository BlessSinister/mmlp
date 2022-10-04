import React from 'react';
import Navbar from './Navbar'
import Slider from './Slider';

class Header extends React.Component {
    render() {
        return (
            <>
                < Navbar />
                <Slider />
            </>
        )
    }
}
export default Header
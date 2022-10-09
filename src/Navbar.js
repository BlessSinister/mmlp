import React from 'react';
import logo from './logo_mmlp.svg'

class Navbar extends React.Component {
    render() {
        return (<>        <div className='data-header-container'>
            <img src={logo} alt="logo" className='data-header-logo' />

            <ul className='data-header-ul'>
                <li className='nav-li-effects'><a href='#'>Редуслим</a></li>
                <li className='nav-li-effects'><a href="$">Алкоган</a></li>
                <li className='nav-li-effects'><a href="#">Контакты</a></li>
            </ul>
            <a href='$'>
                <button className='data-header-btn data-header-btn-position'>Принять участие в акции</button>
            </a>
        </div>

        </>

        )
    }
}
export default Navbar
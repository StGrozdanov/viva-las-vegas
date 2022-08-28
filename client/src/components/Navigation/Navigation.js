import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useState } from 'react';

export default function Navigation() {
    const [navIsExpanded, setNavIsExpanded] = useState(false);

    function navExpandHandler() {
        if (navIsExpanded) {
            setNavIsExpanded(false);
        } else {
            setNavIsExpanded(true);
        }
    }

    return (
        <nav id='site-nav' className='site-header-navigation'>
            <NavLink to='/' className='header-logo'>
                <img src="casino_logo.png" alt="" />
                Viva Las Vegas
            </NavLink>
            <button className='nav-dropdown-btn' onClick={navExpandHandler}>
                <FontAwesomeIcon
                    style={{ display: navIsExpanded ? 'none' : '' }}
                    icon={faBars}
                />
                <FontAwesomeIcon
                    style={{ display: navIsExpanded ? 'flex' : 'none' }}
                    icon={faXmark}
                />
            </button>
            <ul
                style={{ display: navIsExpanded ? 'flex' : '' }}
                className='nav-ul'
                onClick={navExpandHandler}
            >
                <li>
                    <NavLink to='/'>Play</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Sign Up</NavLink>
                </li>

                <li>
                    <NavLink to='/members'>Our Members</NavLink>
                </li>
            </ul>
        </nav>
    );
}
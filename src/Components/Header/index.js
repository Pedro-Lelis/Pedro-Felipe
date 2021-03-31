import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

function Header(){
    return(

            <div className='header'>
                <Link className="text" to='/'>
                <a href="https://fontmeme.com/pt/fonte-de-pokemon/"><img src="https://fontmeme.com/permalink/210329/d28472afb9a391904f9eab67724b5431.png" alt="fonte-de-pokemon" border="0" className="imgPokedex"/></a>
                </Link>
            </div>

    );
}

export default Header;
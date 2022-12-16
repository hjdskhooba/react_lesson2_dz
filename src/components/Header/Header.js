import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__inner'>
                <h2 className='header__logo'>FIFU</h2>
                <ul className='header__list'>
                    <li className='header__item'><a className='header__item-a' href=''>Sign in</a></li>
                    <li className='header__item'><a className='header__item-a' href=''>See all icons</a></li>
                    <li className='header__item'><a className='header__item-a' href=''>FAQ</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
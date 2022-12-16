import React from 'react'
import encounter__rightimg from '../../assets/main__right/Rectangle.png'
import Icons from '../Icons/Icons.js'

const Main = () => {
  return (
    <>
    <div className='encounter__page'>
        <div className='container'>
            <div className='encounter__inner'>
                <div className='encounter__left'>
                    <h1 className='encounter__left-title'>
                        36+ REGULAR ICONS
                    </h1>
                    <h3 className='encounter__left-subtitle'>
                        Icons designed specifically for your interface
                    </h3>
                    <button className='encounter__left-btn'>See all icons</button>
                    <br/>
                    <a className='encounter__left-link' target="_blank" href='https://github.com/hjdskhooba'>by baki 👉 hjdskhooba</a>
                </div>
                <div className='encounter__right'>
                    <img width='550px' src={encounter__rightimg} alt='encrightimg' />
                </div>
            </div>
        </div>
    </div>
    <Icons/>
    </>
  )
}

export default Main
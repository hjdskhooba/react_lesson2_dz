import React from 'react'
import { servicesData } from './../../data/servicesData';

const Icons = () => {
  return (
    <div className='icons'>
        <div className='container'>
            <div className='icons__inner'>
                <div className='icons__main'>
                {
                    servicesData.map((item) => (
                        <div className='forwidth'><img src={item.icon} alt='icons' width='35px' height='35px' /></div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Icons
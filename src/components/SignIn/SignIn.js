import React, { useState } from 'react'

const SignIn = () => {
  const initState = ''
  const [mes, setMes] = useState('Sign in')

  function success(){
    setMes(mes = 'Success')
  }
  function reset(){
    setMes(initState)
    setMes('Success')
  }

  return (
    <div className='signIn__block'>
        <div className='container'>
            <div className='signIn__inner'>
              <form onSubmit={()=>{reset()
                  success()}} className='signIn__form'>
                <h3>{mes}</h3>
                <input className='form__input' type="email" placeholder="Email" />
                <br/>
                <br/>
                <input className='form__input' type="password" placeholder="Email" />
                <br/>
                <br/>
                <input className='form__input' type="text" placeholder="Name" />
                <br/>
                <br/>
                <input className='form__input' type="text" placeholder="Last Name" />
                <br/>
                <br/>
                <button>Send</button>
                <br/>
                <br/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn


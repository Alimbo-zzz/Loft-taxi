import React from 'react';
import {Button} from '../../ui';

function SignIn(events) {
  const {changeSing} = events;


  return (<>
    <div className="AuthForm__container">
      <h2 className="title">Войти</h2>
      <label data-name="inp">
        <h5 className="title">Email</h5>
        <input
          type="email" required
          name='mail'
          placeholder='mail@mail.ru'
        />
      </label>
      <label data-name="inp">
        <h5 className="title">Пароль</h5>
        <input
          type="password" required
          name='password'
          placeholder='*************'
        />
      </label>
      <p className='text' data-link='forgot-pass' >Забыли пароль?</p>
      <Button type='submit'>Войти</Button>
      <p className='text' data-link='change-sing' onClick={changeSing}>Новый пользователь? <span>Регистрация</span> </p>
    </div>
  </>);
}

export default SignIn;

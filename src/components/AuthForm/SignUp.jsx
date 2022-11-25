import React from 'react';
import {Button} from '../../ui';

function SignUp(events) {
  const {changeSing} = events;

  return (<>
    <div className="AuthForm__container">
      <h2 className="title">Регистрация</h2>
      <label data-name="inp">
        <h5 className="title">Email*</h5>
        <input
          type="email" required
          name='mail'
          placeholder='mail@mail.ru'
        />
      </label>
      <label data-name="inp">
        <h5 className="title">Как вас зовут?*</h5>
        <input
          type="text" required
          name='username'
          placeholder='Петр Александрович'
        />
      </label>
      <label data-name="inp">
        <h5 className="title">Придумайте пароль*</h5>
        <input
          type="password" required
          name='password'
          placeholder='*************'
        />
      </label>
      <Button type='submit'>Зарегистрироваться</Button>
      <p className='text' data-link='change-sing' onClick={changeSing}>Уже зарегестрированны? <span>Войти</span> </p>
    </div>
  </>);
}

export default SignUp;

import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import Button from "../../components/Button";
import Input from "../../components/Input";
import './styles.scss';

function Token() {
  const [message, setMessage] = useState('');
  const [changeInput, setChangeInput] = useState('password');
  const [handleInput, setHandleInput] = useState(false);

  const theme = localStorage.getItem('theme');

  document.title = 'Token';

  const setToken = (e: any) => {
    e.preventDefault();
    setMessage('');

    const token: string = e.target.token.value;

    if (token === '' || token === ' ') {
      setMessage('Field cannot be empty.');
      return;
    }

    try {
      localStorage.setItem('token', token);

      setMessage('Token saved.');
    } catch (error) {
      setMessage('Error saving token.');
    }
  }

  return (
    <div className="container-token" id={theme === 'dark' ? 'container--dark' : 'container--light'}>
      <h1>Save Token</h1>
      <form className="form-token" onSubmit={setToken}>
        <p
          className="message"
          id={message === 'Token saved.' ? 'success' : 'error'}
        >
          {message}
        </p>
        <div className="box-input">
          <Input
            className="input-token"
            id={theme === 'dark' ? 'input--dark': 'input--light'}
            name="token"
            type={changeInput}
            placeholder="Token"
          />
          <a 
            className="btn-eye"
            onClick={() => {
              setHandleInput(!handleInput);
              
              if (handleInput) setChangeInput('password');
              else setChangeInput('text');
            }}
          >
            { handleInput ? (<AiFillEyeInvisible/>) : (<AiFillEye/>) }
          </a>
        </div>
        <Button
          className="btn-set"
          value="Save"
        />
      </form>
    </div>
  );
}

export default Token;
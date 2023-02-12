import { useState } from 'react';
import Typed from 'react-typed';

import './App.scss';
import Button from './components/Button';
import Loading from './components/Loading';
import Textarea from './components/Textarea';

function App() {
  const [textareaWarning, setTextareaWarning] = useState(false);
  const [messageWarning, setMessageWarning] = useState('');
  const [responseSearch, setResponseSearch] = useState('');
  const [responseSearchCopy, setResponseSearchCopy] = useState('');
  const [loading, setLoading] = useState(false);

  const theme = localStorage.getItem('theme');

  document.title = 'Home';
  document.documentElement.lang = 'en';

  const validInput = (text: string): boolean => {
    if (text === '' || text === ' ') {
      setTextareaWarning(true);
      setMessageWarning('Field cannot be empty.');

      setTimeout(() => {
        setTextareaWarning(false)
        setMessageWarning('');
      }, 4000);

      return false;
    }

    return true;
  }

  const search = async (event: any) => {
    event.preventDefault();

    const model: string = 'text-davinci-003';
    const text: string = event.target.text.value;
    const max_tokens: number = 2048;

    const isValid = validInput(text);

    if (!isValid)
      return;

    setResponseSearch('');

    const token = localStorage.getItem('token');

    if (!token) {
      setMessageWarning('Invalid token.');

      setTimeout(() => setMessageWarning(''), 4000);
      return;
    }

    setLoading(true);
    const response = await fetch('https://ask-me-anythiing.vercel.app/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ model, text, max_tokens })
    }).then(res => res.json())
      .then(res => res)
      .catch(error => console.log(error));

    if (response.code !== 200) {
      if (response.code === 401) {
        console.log(response.message);
        setMessageWarning(response.message);
        setLoading(false);
      }

      console.log(response);
      setTimeout(() => setMessageWarning(''), 4000);
      return;
    }

    setResponseSearch(response.response.choices[0].text.replace(/\n/g, '<br>'));
    // setResponseSearch('TypeScript é uma linguagem de programação open-source desenvolvida pela Microsoft. Ela é um superconjunto de JavaScript que adiciona sintaxes mais avançadas, como classes, interfaces e tipagem estática, ao já existente JavaScript. O TypeScript converte os arquivos .ts (arquivos TypeScript) em arquivos JavaScript e os torna executáveis em navegadores modernos e ferramentas de desenvolvimento. Com o TypeScript, programadores podem criar aplicações de grandes portes mais rapidamente e com facilidade, aperfeiçoando o código à medida que cria.|TypeScript é uma linguagem de programação open-source desenvolvida pela Microsoft. Ela é um superconjunto de JavaScript que adiciona sintaxes mais avançadas, como classes, interfaces e tipagem estática, ao já existente JavaScript. O TypeScript converte os arquivos .ts (arquivos TypeScript) em arquivos JavaScript e os torna executáveis em navegadores modernos e ferramentas de desenvolvimento. Com o TypeScript, programadores podem criar aplicações de grandes portes mais rapidamente e com facilidade, aperfeiçoando o código à medida que cria.|TypeScript é uma linguagem de programação open-source desenvolvida pela Microsoft. Ela é um superconjunto de JavaScript que adiciona sintaxes mais avançadas, como classes, interfaces e tipagem estática, ao já existente JavaScript. O TypeScript converte os arquivos .ts (arquivos TypeScript) em arquivos JavaScript e os torna executáveis em navegadores modernos e ferramentas de desenvolvimento. Com o TypeScript, programadores podem criar aplicações de grandes portes mais rapidamente e com facilidade, aperfeiçoando o código à medida que cria.|');
    setResponseSearchCopy(response.response.choices[0].text);
    setLoading(false);
  }

  return (
    <div className="App" id={theme === 'dark' ? 'App--dark' : 'App--light'}>
      <h1>Ask me</h1>

      <div className='container-forms'>
        <form className='form' onSubmit={search}>
          <Textarea
            className={textareaWarning ? 'text--warning' : 'textarea-text'}
            id={theme === 'dark' ? 'textarea--dark' : 'textarea--light'}
            name='text'
            placeholder='Input'
          />
          <Button
            className='btn-search'
            value='Search'
          />
        </form>
        <div className='warnings'>
          <h3 style={{ textAlign: 'center' }}>Warnings</h3>
          {messageWarning && 
            <p 
              style={{ marginTop: '10px', color: '#dc3545' }}
            >
              {messageWarning}
            </p>
          }
          {loading && 
            <Loading 
              height='75px' 
              width='75px' 
            />
          }
        </div>
        <div className='result'>
          {!responseSearch ? (
            <Textarea
              className={`textarea-result ${theme === 'dark' ? 'textresult-dark' : 'textresult-light'}`}
              placeholder='Output'
              // value={responseSearch}
              readOnly={true}
            />
          ) : (
            <Typed
              className={`textarea-result ${theme === 'dark' ? 'textresult-dark' : 'textresult-light'}`}
              strings={[responseSearch]}
              typeSpeed={30}
            />
          )}
          <Button
            className='btn-copy'
            value='Copy'
            onClick={() => 
              navigator.clipboard.writeText(responseSearchCopy)
            }
          />
        </div>
      </div>
    </div>
  )
}

export default App;
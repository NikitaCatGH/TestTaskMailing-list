import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

import TelegramLine from './components/TelegramLine';
import TelegramList from './components/TelegramList';


function App() {
  const [telegrams, addTelegrams] = useState([
    { id: 1, text: 'Hello Telegram' },
    { id: 2, text: 'Hello Telegram2' },
    { id: 3, text: 'Hello Telegram3' }
  ]);



  return (
    <div className="App">
      <div className='Header'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ marginTop: 10 }}></Form.Label>
            <Form.Control placeholder="Текст сообщения" className="Input" />
          </Form.Group>
        </Form>
        <Button variant='outline-info' >Добавить Telegram </Button>
        <Button variant='outline-success'>Добавить Whatsapp</Button>
        <Button variant='outline-primary'>Добавить Вконтакте</Button>
      </div>
      <TelegramList telegrams={telegrams} />
    </div>
  );
};

export default App;

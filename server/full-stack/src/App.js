import React, { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [redisValue, setRedisValue] = useState('');

  const keyChange = (key) => {
    console.log(key.currentTarget.value)
    setKey(key.currentTarget.value);
  }

  const valueChange = (value) => {
    console.log(value.currentTarget.value)

    setValue(value.currentTarget.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios.get('/api/redis/set', {
      params: {
        key: key,
        value: value
      }
    }).then(value => {
      console.log('Got response from backend', value.data);
      setRedisValue(value.data.response)
    });
  }

  return (
    <div>
      <div>
        <label>Key</label>
        <input onChange={keyChange}></input>
        <label>Value</label>
        <input onChange={valueChange}></input>
      </div>
      <div>
        <button onClick={onSubmit}>Submit Key</button>
      </div>
      <div>
        {redisValue}
      </div>
    </div>
  )
}

export default App;

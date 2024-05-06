// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {

  function sub(e){
    e.preventDefault();
    let form={
      name:e.target.name.value,
      password:e.target.password.value,
    };
    fetch('http://localhost:3001/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => {
        alert('Server response:'+data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <div id='app'>
      <form method='' action='' onSubmit={sub}>
        Name:<input type='text' name='name'/>
        password:<input type='password' name='password'/>
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;

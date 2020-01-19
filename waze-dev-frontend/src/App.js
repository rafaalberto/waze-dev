import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import DeveloperForm from './components/DeveloperForm';
import DeveloperItem from './components/DeveloperItem';

const App = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const loadDevelopers = async () => {
      const response = await api.get('/developers');
      setDevelopers(response.data);
    }
    loadDevelopers();
  }, []);

  const handleSubmit = async (data) => {
    try {
      const response = await api.post('/developers', data);
      setDevelopers([...developers, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DeveloperForm onSubmit={handleSubmit} />
      </aside>

      <main>
        <ul>
          {developers.map(developer => (
            <DeveloperItem key={developer._id} developer={developer} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

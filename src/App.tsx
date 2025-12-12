import { useEffect, useState } from 'react';
import api, { RESPONSE_DATA } from './api';
import './App.css';

function App() {
  const [data, setData] = useState<RESPONSE_DATA>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get.data();
        setData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? <p>{data.greeting}</p> : 'Loading...'}
      </header>
    </div>
  );
}

export default App;

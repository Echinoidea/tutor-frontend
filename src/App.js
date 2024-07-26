import './App.css';

import { useState, useEffect } from 'react';
import DataTable from './DataTable';

function App() {
  const [ classData, setClassData ] = useState([]);

  // Get class table data on load
  useEffect(() => {
    const getData = async () => {
      await fetch('http://localhost:8000/api/class')
      .then(response => response.json())
      .then(data => setClassData(data));
    }
    getData()
  }, []);

  return (
    <div className="App">
      <main className='App-main'>
        <DataTable data={classData}/>
      </main>
    </div>
  );
}

export default App;

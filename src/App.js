import './App.css';

import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react';
import DataTable from './DataTable';

const supabaseUrl = 'https://rclumlmyqtxgmthpqsrj.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Get all rows from table given table name
const fetchAllRows = async (tableName) => {
  const { data, error } = await supabase
    .from(tableName)
    .select()

  if (error) {
    console.error('Error fetching data:', error)
    return []
  }

  return data
}

function App() {
  const [ classData, setClassData ] = useState([]);

  // Get class table data on load
  useEffect(() => {
    const getData = async () => {
      const tableData = await fetchAllRows('class')
      setClassData(tableData)
    }
    
    getData()
  }, [])

  return (
    <div className="App">
      <main className='App-main'>
        <DataTable data={classData}/>
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DatePicker from "react-datepicker";
import { useState } from 'react';

import DataTable from 'react-data-table-component';

import "react-datepicker/dist/react-datepicker.css";


function App() {
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
      name: 'Data',
      selector: 'date',
      cell: (row) => (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      ),
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]


  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">

      <h1>oi</h1>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <DataTable
            columns={columns}
            data={data}
        />
  
   
  

    </div>
  );
}

export default App;

import { useState, useReducer } from 'react'
import Table from './Table';
import CheckBoxModule from './CheckBoxModule';
import './index.css'

function App() {
  const data_headers = ["Municipality", "Amount"]
  const data_items = [[23,5], [30,5], [50,1]]
  function handleFilterChange(state, action) {
    switch (action.type) {
      case 'ST':
        return{...state, ST: !state.ST,}
      case 'LT':
        return {...state, LT: !state.LT,}
      case 'UT':
        return {...state,UT: !state.UT,}
    }
  }

  const [filterState, filterReducer] = useReducer(handleFilterChange,
    {ST: true,
      LT: true,
      UT: true
    }
  );
  return (
    <div className="flex content-center flex-col grow-0">
      <h1 className="text-center text-4xl font-bold font-mono text-green-900" >Municipal Spending Dashboard</h1>
      <div>
        <div>
          <CheckBoxModule moduleState={filterState} filterReducer={filterReducer}/>
        </div>
        <div className="self-auto justify-items-center">
        <Table headers={data_headers} table_content={data_items} filters={filterState}/>
        </div>
      </div>
    </div>
  )
}

export default App

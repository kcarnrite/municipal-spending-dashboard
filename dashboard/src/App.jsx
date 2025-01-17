import { useState } from 'react'
import Table from './Table';
import './index.css'

function App() {
  const data_headers = ["Label 1", "Label 2"]
  const data_items = [[23,5], [30,5], [50,1]]
  return (
    <div class="flex content-center flex-col grow-0">
      <h1 class="text-center text-4xl font-bold font-mono text-green-900" >Municipal Spending Dashboard</h1>
        <div class="self-auto">
        <Table headers={data_headers} table_content={data_items} />
        </div>
    </div>
  )
}

export default App

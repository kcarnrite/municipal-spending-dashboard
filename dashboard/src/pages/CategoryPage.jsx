import { useReducer } from "react"
import FilterControls from "../components/FilterControls"
import Table from "../components/Table"
import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../App"

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/category',
  component: CategoryPage
})


function CategoryPage() {
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
      case 'CHANGE_QUERY':
        return {...state, query: action.payload}
      case 'CHANGE_MEASUREMENT':
        return {...state, measurement: action.payload}
      case "HIDE_LOW_POPULATION":
        return {...state, hideLowPopulation: !state.hideLowPopulation }
      case 'CHANGE_SEARCH_TERM':
        return {...state, searchTerm: action.payload}
      default:
        throw new Error("Action not declared")
    }
  }

  const [filterState, filterReducer] = useReducer(handleFilterChange,
    {ST: true,
      LT: true,
      UT: true,
      hideLowPopulation: true,
      query: '240',
      measurement: ['Per Capita', 'perCapita'],
      searchTerm: '',
    }
  );
    return (
        <div className="flex content-center flex-col grow-0 mx-8 md:mx-32">
        <h1 className="text-center text-4xl font-bold font-mono text-green-900" >Spending By Category</h1>
        <div>
            <div className="self-auto justify-items-center">
              <FilterControls onFilterChange={filterReducer} filterState={filterState} />
            </div>
            <div className="self-auto justify-items-center">
                <Table headers={data_headers} table_content={data_items} filters={filterState}/>
            </div>
        </div>
      </div>
    )
}
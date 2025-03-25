import DropdownFilter from "./DropdownFilter";
import CheckBoxModule from "./CheckBoxModule"
import CheckBox from "./CheckBox"
import { Dropdown, ListItem, SubList } from './Dropdown';
import { useEffect, useState } from "react";
const APIBASEURL = 'http://localhost:5000/api/'


function FilterControls({filterState, onFilterChange}) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`${APIBASEURL}get_categories`)
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="mx-30 flex-nowrap flex gap-8 my-2">
            
            <div className="flex flex-row gap-4">
                <Dropdown text={filterState.measurement[0]}>
                    <ListItem text="Total" onClick={(event) => onFilterChange({type:'CHANGE_MEASUREMENT', payload:["Total", "total"]})} />
                    <ListItem text="Per Capita" onClick={(event => onFilterChange({type:'CHANGE_MEASUREMENT', payload:["Per Capita", 'perCapita']}))} />
                </Dropdown>
      
                <Dropdown text="Category">
                {
                   (categories['General Government']) ? (
                        <>
                    <SubList text='General Government'>
                        {categories['General Government'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <SubList text='Protection Services'>
                        {categories['Protection Services'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <SubList text='Transportation Services'>
                        {categories['Transportation Services'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <SubList text='Environmental Services'>
                        {categories['Environmental Services'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <SubList text='Health Services'>
                        {categories['Health Services'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <SubList text='Social and Family Services'>
                        {categories['Social and Family Services'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}

                    </SubList>
                    
                    <SubList text='Recreation and Cultural Services'>
                        {categories['Recreation and Cultural Services'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <SubList text='Planning and Development'>
                        {categories['Planning and Development'].map(item => {
                        return (<ListItem text={item[1]} onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:item[0]})} />)
                        })}
                    </SubList>

                    <ListItem text='Other' onClick={event => onFilterChange({type:'CHANGE_QUERY', payload:1910})}/>
                    <ListItem text='Total' onClick={event => onFilterChange({type:'CHANGE_QUERY', payload:9910})}/>
                    </>
                    
                    ) : 'Loading...'
                }
                </Dropdown>
                
      
        </div>

            

            <CheckBoxModule moduleState={filterState} filterReducer={onFilterChange} />
            < CheckBox 
            id="low-population" 
            labelText="Hide Low Population Municipalities"
            checkedState={filterState.hideLowPopulation}
            onChange = {() => onFilterChange({type: "HIDE_LOW_POPULATION"})} />
        </div>
    );

}

export default FilterControls;
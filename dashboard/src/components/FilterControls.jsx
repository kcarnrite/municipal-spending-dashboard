import CheckBoxModule from "./CheckBoxModule"
import CheckBox from "./CheckBox"
import { Dropdown, ListItem, SubList } from './Dropdown';
import { useEffect, useState } from "react";
import MoreFilters from "./MoreFilters";
import SearchBar from "./SearchBar";
const APIBASEURL = 'http://localhost:5000/api/'


function FilterControls({filterState, onFilterChange}) {
    const [categories, setCategories] = useState([])
    const [years, setYears] = useState([]);
    useEffect(() => {
        fetch(`${APIBASEURL}get_categories`)
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch(`${APIBASEURL}get_years`)
        .then(response => response.json())
        .then(data => setYears(data))
    }, [])

    return (
        <div className="mx-30 md:flex-nowrap flex-wrap flex gap-8 my-2">
            <SearchBar 
                searchState={filterState.searchTerm} 
                setSearchState={event => onFilterChange({type: 'CHANGE_SEARCH_TERM', payload:event.target.value})}/>
            
            <div className="flex flex-row gap-4">
                
      
                <Dropdown text="Category">
                {
                   (categories['General Government']) ? (
                        <>
                    <SubList text='General Government'>
                        {categories['General Government'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'General Government/' + item[1]]})} 
                            />
                        )
                        })}
                    </SubList>

                    <SubList text='Protection Services'>
                        {categories['Protection Services'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Protection Services/' + item[1]]})} 
                            />
                        )
                        })}
                    </SubList>

                    <SubList text='Transportation Services'>
                        {categories['Transportation Services'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Transportation Services/' + item[1]] })} 
                            />
                        )
                        })}
                    </SubList>

                    <SubList text='Environmental Services'>
                        {categories['Environmental Services'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Environmental Services/' + item[1]] })} 
                                />
                            )
                        })}
                    </SubList>

                    <SubList text='Health Services'>
                        {categories['Health Services'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Health Services/' + item[1]] })} 
                                />
                            )
                        })}
                    </SubList>

                    <SubList text='Social and Family Services'>
                        {categories['Social and Family Services'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Social and Family Services/' + item[1]] })} 
                            />
                        )
                        })}

                    </SubList>
                    
                    <SubList text='Recreation and Cultural Services'>
                        {categories['Recreation and Cultural Services'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Recreation and Cultural Services/' + item[1]]})} 
                            />
                        )
                        })}
                    </SubList>

                    <SubList text='Planning and Development'>
                        {categories['Planning and Development'].map(item => {
                        return (
                            <ListItem 
                                text={item[1]} 
                                onClick={(event) => onFilterChange({type:'CHANGE_QUERY', payload:[item[0], 'Planning and Development/' + item[1]]})} 
                            />
                        )
                        })}
                    </SubList>

                    <ListItem text='Other' onClick={event => onFilterChange({type:'CHANGE_QUERY', payload:[1910, 'Other']})}/>
                    <ListItem text='Total' onClick={event => onFilterChange({type:'CHANGE_QUERY', payload:[9910, 'Total']})}/>
                    </>
                    
                    ) : <ListItem text='Loading...'/>
                }
                </Dropdown>
                
                <Dropdown text={filterState.measurement[0]}>
                    <ListItem text="Total" onClick={(event) => onFilterChange({type:'CHANGE_MEASUREMENT', payload:["Total", "total"]})} />
                    <ListItem text="Per Capita" onClick={(event => onFilterChange({type:'CHANGE_MEASUREMENT', payload:["Per Capita", 'perCapita']}))} />
                </Dropdown>

                <Dropdown text={filterState.year}>
                    {years.map(year => (
                        <ListItem key={year[0]} text={year[0]} onClick={(event) => onFilterChange({type: 'CHANGE_YEAR', payload:year[0]})} />
                    ))}
                </Dropdown>
      
        </div>

            
            <MoreFilters>
                <div>
                    <p className='text-lg font-bold'>Population:</p>
                    < CheckBox 
                    id="low-population" 
                    labelText="Hide Low Population Municipalities"
                    checkedState={filterState.hideLowPopulation}
                    onChange = {() => onFilterChange({type: "HIDE_LOW_POPULATION"})} />
                </div>
            </MoreFilters>
        </div>
    );

}

export default FilterControls;
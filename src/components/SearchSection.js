import React from 'react'
import SearchForm from '../containers/SearchForm'
import SearchFilterToggle from '../containers/SearchFilterToggle'

const SearchSection = () => (
  <div className='searchSection'>
    <h1>NASA Search</h1>
    <SearchForm />
    <div className='searchFilters'>
      <SearchFilterToggle label='Images' value='image' />
      <SearchFilterToggle label='Audio' value='audio' />
    </div>
  </div>
)

export default SearchSection

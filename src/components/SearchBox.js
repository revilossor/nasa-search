import React from 'react'

const SearchBox = ({ term, onClick }) => (
  <div className='searchBox'>
    <form>
      <input type='text' />
      <input type='image' src='search-icon.svg' alt='search icon' onClick={onClick} />
    </form>
  </div>
)

export default SearchBox

import React from 'react'

const SearchFilter = ({ label, value, checked, onClick }) => (
  <span className='searchFilter' onClick={onClick}>
    <span className='checkbox'>
      <input id={value} type='checkbox' checked={checked} />
      <label htmlFor={value} />
    </span>
    <strong>{ label }</strong>
  </span>
)

export default SearchFilter

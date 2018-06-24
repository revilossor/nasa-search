import React from 'react'
import { Link } from 'react-router-dom'

const Preview = ({ id, thumb, onClick }) => (
  <div className='preview' id={id} onClick={onClick} >
    <Link to={`/asset/${id}`}>
      <img src={thumb} alt='thumb' />
    </Link>
  </div>
)

export default Preview

import React from 'react'

const DetailAsset = ({ sources, type }) => {
  const getMediaItem = () => {
    switch (type) {
      case 'audio':
        return (
          <h2>poop</h2>
        )
      case 'image':
        return (
          <img src={sources[1]} />
        )
    }
    return (
      <h1> poop </h1>
    )
  }

  return (
    <div className='detail-asset'>
      { getMediaItem() }
    </div>
  )
}

export default DetailAsset

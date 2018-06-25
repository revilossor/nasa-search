import React from 'react'

const DetailAsset = ({ sources, type }) => {
  const getMediaItem = () => {
    switch (type) {
      case 'audio':
        return (
          <audio src={sources[1]} />
        )
      default:
        return (
          <img src={sources[1]} alt="image"/>
        )
    }
  }

  return (
    <div className='detail-asset'>
      { getMediaItem() }
    </div>
  )
}

export default DetailAsset

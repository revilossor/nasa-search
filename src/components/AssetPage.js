import React from 'react'
import DetailAsset from './DetailAsset'

const AssetPage = ({ match: { params }, title, description, sources, mediaType }) => { // might not have detail in state...
  const createMarkup = () => {
    return { __html: description }
  }
  return (
    <div className='assetPage' title={title}>
      <div className='content'>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={createMarkup()} />
        <DetailAsset sources={sources} type={mediaType} />
      </div>
    </div>
  )
}

export default AssetPage

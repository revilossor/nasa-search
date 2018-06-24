import React from 'react'
import ItemPreview from '../containers/ItemPreview'

const PreviewList = ({ previews }) => (
  <div>
    {
      previews.map((preview, index) => (
        <ItemPreview key={index} id={preview.id} thumb={preview.thumb} />
      ))
    }
  </div>
)

export default PreviewList

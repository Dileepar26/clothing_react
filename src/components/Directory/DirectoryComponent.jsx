import React from 'react'
import './directoryComponent.scss'
import DirectoryItem from '../directoryItem/DirectoryItem'
function DirectoryComponent({categories}) {
  return (
    <div className="directory-container">
      {
        categories.map(category => (
          <DirectoryItem key={category.id} category={category} />
        ))
      }
    </div>
  )
}

export default DirectoryComponent
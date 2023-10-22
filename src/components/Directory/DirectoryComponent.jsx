import React from 'react'
import './directoryComponent.scss'
import CategoryItem from '../categoryItem/CategoryItem'
function DirectoryComponent({categories}) {
  return (
    <div className="directory-container">
      {
        categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))
      }
    </div>
  )
}

export default DirectoryComponent
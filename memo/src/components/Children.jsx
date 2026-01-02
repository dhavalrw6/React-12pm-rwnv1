import React, { memo } from 'react'

const Children = () => {

    console.log('Children component render.....');
    

  return (
    <div>
      <h2>Children Coumponent</h2>
    </div>
  )
}

export default memo(Children)

import DropZone from '@/components/DropZone'
import React from 'react'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'

const NewFragranceImageSection = () => {
  return (
    <div>
      <DropZone
        hint='We recommend high-quality JPG files under 5MB'
        accept='image/png,image/jpeg,image/webp'
        onRenderIcon={(
          <FaRegArrowAltCircleUp
            size={32}
          />
        )}
      />
    </div>
  )
}

export default NewFragranceImageSection

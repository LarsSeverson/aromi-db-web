import Divider from '@/components/Divider'
import React from 'react'
import NewFragranceImageSection from '../components/NewFragranceImageSection'
import NewFragranceInfoSection from '../components/NewFragranceInfoSection'
import NewFragranceTraitsSection from '../components/NewFragranceTraitsSection'
import NewFragranceGenderSection from '../components/NewFragranceGenderSection'
import NewFragranceAccordsSection from '../components/NewFragranceAccordsSection'

const NewFragrancePage = () => {
  return (
    <div
      className='flex flex-col gap-3'
    >
      <div
        className='max-w-5xl w-full self-center'
      >
        <span
          className='text-xl'
        >
          New Fragrance
        </span>

        <Divider
          horizontal
          className='my-4'
        />
      </div>

      <div
        className='flex flex-wrap max-w-4xl min-w-96 self-center w-full gap-10'
      >
        <div
          className='flex-1 flex flex-col gap-8'
        >
          <NewFragranceImageSection />
        </div>

        <div
          className='flex-1'
        >
          <NewFragranceInfoSection />
        </div>

        <Divider
          horizontal
        />
      </div>

      <NewFragranceGenderSection />

      <NewFragranceAccordsSection />

      <NewFragranceTraitsSection />
    </div>
  )
}

export default NewFragrancePage

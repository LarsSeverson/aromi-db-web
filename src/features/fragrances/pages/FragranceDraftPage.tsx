import React from 'react'
import FragranceDraftHeading from '../components/FragranceDraftHeading'
import { Form } from '@base-ui-components/react'
import DraftImageSection from '../components/DraftImageSection'
import Divider from '@/components/Divider'
import SubmitButton from '@/components/SubmitButton'
import DraftInfoSection from '../components/DraftInfoSection'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import DraftGenderSection from '../components/DraftGenderSection'
import DraftFragranceAccordsSection from '../components/DraftFragranceAccordsSection'
import DraftFragranceNotesSection from '../components/DraftFragranceNotesSection'
import DraftFragranceTraitsSection from '../components/DraftFragranceTraitsSection'

const FragranceDraftPage = () => {
  const { id } = useFragranceDraftContext()

  return (
    <div
      className='flex flex-col gap-5'
    >
      <FragranceDraftHeading />

      <Form
        key={id}
        className='w-full flex flex-col gap-5'
      >
        <div
          className='flex flex-wrap max-w-4xl min-w-96 self-center w-full gap-10'
        >
          <div
            className='flex-1 flex flex-col gap-8'
          >
            <DraftImageSection />
          </div>

          <div
            className='flex-1'
          >
            <DraftInfoSection />
          </div>

          <Divider
            horizontal
          />
        </div>

        <div
          className='flex flex-col gap-16 max-w-4xl w-full self-center'
        >
          <DraftGenderSection />

          <Divider
            horizontal
          />

          <DraftFragranceAccordsSection />

          <Divider
            horizontal
          />

          <DraftFragranceNotesSection />

          <Divider
            horizontal
          />

          <DraftFragranceTraitsSection />

          <div
            className='w-full max-w-xs self-center'
          >
            <SubmitButton />
          </div>
        </div>
      </Form>
    </div>
  )
}

export default FragranceDraftPage

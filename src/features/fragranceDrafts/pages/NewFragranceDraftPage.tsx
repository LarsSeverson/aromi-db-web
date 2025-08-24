import Divider from '@/components/Divider'
import React from 'react'
import NewFragranceImageSection from '../components/NewFragranceImageSection'
import NewFragranceInfoSection from '../components/NewFragranceInfoSection'
import { Fieldset, Form } from '@base-ui-components/react'

const NewFragranceDraftPage = () => {
  return (
    <div
      className='flex flex-col gap-5'
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

      <Form
        className='flex flex-wrap max-w-4xl min-w-96 self-center w-full gap-10 '
      >
        <NewFragranceImageSection />

        <Fieldset.Root
          disabled
          className='flex-1 opacity-50'
        >
          <NewFragranceInfoSection />
        </Fieldset.Root>

        <Divider
          horizontal
        />
      </Form>
    </div>
  )
}

export default NewFragranceDraftPage

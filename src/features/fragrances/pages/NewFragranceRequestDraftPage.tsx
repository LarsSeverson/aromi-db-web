import Divider from '@/components/Divider'
import React from 'react'
import NewDraftImageSection from '../components/NewDraftImageSection'
import NewDraftInfoSection from '../components/NewDraftInfoSection'
import { Fieldset, Form } from '@base-ui-components/react'

const NewFragranceRequestDraftPage = () => {
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
        <div
          className='flex-1 flex flex-col gap-8'
        >
          <NewDraftImageSection />
        </div>

        <Fieldset.Root
          disabled
          className='flex-1 opacity-50'
        >
          <NewDraftInfoSection />
        </Fieldset.Root>

        <Divider
          horizontal
        />
      </Form>
    </div>
  )
}

export default NewFragranceRequestDraftPage

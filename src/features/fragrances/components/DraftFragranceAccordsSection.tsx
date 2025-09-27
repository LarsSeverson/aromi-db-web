import { AccordionHeader } from '@/components/Accordion/AccordionHeader'
import { AccordionIcon } from '@/components/Accordion/AccordionIcon'
import { AccordionItem } from '@/components/Accordion/AccordionItem'
import { AccordionPanel } from '@/components/Accordion/AccordionPanel'
import { AccordionRoot } from '@/components/Accordion/AccordionRoot'
import { AccordionTrigger } from '@/components/Accordion/AccordionTrigger'
import React from 'react'

const DraftFragranceAccordsSection = () => {

  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <AccordionRoot
        defaultValue={['accords']}
        className='w-full'
      >
        <AccordionItem
          value='accords'
        >
          <AccordionHeader
            className='flex'
          >
            <AccordionTrigger
              className='text-lg rounded-sm'
              rightSlot={<AccordionIcon />}
            >
              Accords
            </AccordionTrigger>
          </AccordionHeader>

          <AccordionPanel
            className='w-full flex flex-col'
          >
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    </section>
  )
}

export default DraftFragranceAccordsSection

import { AccordionHeader } from '@/components/Accordion/AccordionHeader'
import { AccordionIcon } from '@/components/Accordion/AccordionIcon'
import { AccordionItem } from '@/components/Accordion/AccordionItem'
import { AccordionPanel } from '@/components/Accordion/AccordionPanel'
import { AccordionRoot } from '@/components/Accordion/AccordionRoot'
import { AccordionTrigger } from '@/components/Accordion/AccordionTrigger'
import SelectInput from '@/components/SelectInput'
import { NOTE_LAYER_OPTIONS } from '@/features/notes/types'
import React, { useState } from 'react'

const DraftFragranceNotesSection = () => {
  const [selectedLayer, setSelectedLayer] = useState(NOTE_LAYER_OPTIONS[0].value)

  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <AccordionRoot
        defaultValue={['notes']}
        className='w-full'
      >
        <AccordionItem
          value='notes'
        >
          <AccordionHeader
            className='flex'
          >
            <AccordionTrigger
              className='text-lg rounded-sm'
              rightSlot={<AccordionIcon />}
            >
              Notes
            </AccordionTrigger>
          </AccordionHeader>

          <AccordionPanel>

            <div
              className='flex items-center justify-end py-3'
            >
              <div>
                <SelectInput
                  value={selectedLayer}
                  items={NOTE_LAYER_OPTIONS}
                  onValueChange={setSelectedLayer}
                />
              </div>
            </div>

            <div
              className='w-full flex flex-col'
            >
            </div>
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    </section>
  )
}

export default DraftFragranceNotesSection

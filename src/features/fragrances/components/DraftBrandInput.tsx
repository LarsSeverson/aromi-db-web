import { type IBrandPreview, useSearchBrands } from '@/features/brands'
import React, { useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { DraftBrandsPopover } from './DraftBrandsPopover'
import DraftBrandPreviewChip from '@/features/fragrances/components/DraftBrandPreviewChip'
import { Field } from '@base-ui-components/react'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'

export interface DraftBrandInputProps {
  brand?: IBrandPreview | null
}

const DraftBrandInput = (props: DraftBrandInputProps) => {
  const { brand: initialBrand } = props

  const { setBrand } = useFragranceRequestDraftContext()
  const { brands, refresh } = useSearchBrands()

  const [value, setValue] = useState<string>('')
  const [selected, setSelected] = useState<IBrandPreview | null>(initialBrand ?? null)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const handleSearch = useDebounce(
    (term: string) => {
      refresh({ term })
    },
    300
  )

  const handleUpdateRequestBrand = (brand: IBrandPreview | null) => {
    setBrand({ brandId: brand?.id })
  }

  const handleOnInputValueChange = (value: string) => {
    setValue(value)
    setIsPopoverOpen(true)

    handleSearch(value)
  }

  const handleOnSelectBrand = (brand: IBrandPreview) => {
    setSelected(brand)
    setValue('')
    setIsPopoverOpen(false)

    handleUpdateRequestBrand(brand)
  }

  const handleOnDeselectBrand = () => {
    setSelected(null)
    handleUpdateRequestBrand(null)
  }

  return (
    <Field.Root
      className='flex flex-col'
    >
      <Field.Label
        className='text-md font-medium mb-1'
      >
        Brand
      </Field.Label>

      {selected != null
        ?
        (
          <DraftBrandPreviewChip
            brand={selected}
            onRemove={handleOnDeselectBrand}
          />
        )
        :
        (
          <Field.Control
            placeholder='Search brands...'
            value={value}
            onValueChange={handleOnInputValueChange}
            className='p-2 border-2 rounded-md border-surface2'
          />
        )
      }

      <DraftBrandsPopover
        brands={brands}
        open={isPopoverOpen}
        selected={selected}
        onSelect={handleOnSelectBrand}
        onOpenChange={setIsPopoverOpen}
      />
    </Field.Root>
  )
}

export default DraftBrandInput

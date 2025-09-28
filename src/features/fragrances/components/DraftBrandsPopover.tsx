import type { IBrandPreview } from '@/features/brands'
import { Popover } from '@base-ui-components/react'
import clsx from 'clsx'
import { useRef } from 'react'
import DraftBrandsPopoverItem from './DraftBrandsPopoverItem'

export interface DraftBrandsPopoverProps extends Popover.Root.Props {
  brands: IBrandPreview[]
  selected?: IBrandPreview | null
  onSelect?: (brand: IBrandPreview) => void
}

export const DraftBrandsPopover = (props: DraftBrandsPopoverProps) => {
  const { brands, selected, onSelect, ...rest } = props

  const anchorRef = useRef<HTMLDivElement>(null)

  return (
    <Popover.Root
      modal={false}
      {...rest}
    >
      <div
        ref={anchorRef}
      />

      <Popover.Portal>
        <Popover.Positioner
          anchor={anchorRef.current}
          sideOffset={8}
        >
          <Popover.Popup
            initialFocus={false}
            className={clsx(
              'w-[25rem] max-h-[20rem] flex box-border',
              'rounded-lg overflow-hidden',
              'bg-background outline-1 outline-surface2',
              'origin-[var(--transform-origin)] transition-transform duration-150',
              'data-[starting-style]:opacity-0 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:scale-90'
            )}
          >
            <div
              className='flex-1 min-h-0 overflow-y-auto py-4 px-1 scrollbar-thin'
            >
              <ul
                className='flex flex-col select-none'
              >
                {brands
                  .map(draft => (
                    <DraftBrandsPopoverItem
                      key={draft.id}
                      brand={draft}
                      onSelect={onSelect}
                    />
                  ))}
              </ul>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
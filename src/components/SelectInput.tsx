import React from 'react'
import { Select } from '@base-ui-components/react'
import clsx from 'clsx'
import { CgCheck, CgChevronDown } from 'react-icons/cg'

export interface SelectInputOption {
  label: string
  value: unknown
}

export interface SelectInputProps<T extends SelectInputOption> {
  options: T[]
  label?: string
}

const SelectInput = <T extends SelectInputOption, >(props: SelectInputProps<T>) => {
  const { options, label } = props

  return (
    <Select.Root
      required
      items={options}
    >
      <div
        className='flex flex-col'
      >
        <span
          className='text-md font-semibold mb-1'
        >
          {label}
        </span>

        <Select.Trigger
          className={clsx(
            'box-border flex items-center justify-between w-max min-w-36 max-w-[364px]',
            'gap-3 h-10 pl-[0.875rem] pr-3 m-0',
            'outline-0 border-2 rounded-md',
            'leading-6 text-light',
            'cursor-default select-none',
            'hover:bg-surface2 border-surface2'
          )}
        >
          <Select.Value
            className='flex-1 truncate text-nowrap'
          />

          <Select.Icon>
            <CgChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Positioner
            className='select-none'
            sideOffset={8}
          >
            <Select.ScrollUpArrow
              className={clsx(
                'top-0 z-[1] flex h-6 w-full cursor-default items-center justify-center rounded-md',
                'bg-surface text-center text-xs before:absolute',
                "before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']",
                'data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]'
              )}
            />

            <Select.Popup
              className={clsx(
                'group box-border p-2 rounded-md bg-background',
                'max-h-[var(--available-height)] origin-[var(--transform-origin)]',
                'overflow-y-auto transition-[transform,scale,opacity]',
                'data-[ending-style]:scale-90 data-[ending-style]:opacity-0',
                'data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90',
                'data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100',
                'data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none',
                'outline outline-1 outline-surface2'
              )}
            >
              {options
                .map(({ label, value }) => (
                  <Select.Item
                    key={label}
                    value={value}
                    className={clsx(
                      'grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center',
                      'gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none',
                      'group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base',
                      'group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0',
                      'data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1',
                      'data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm',
                      'pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]',
                      'hover:bg-surface rounded-md'
                    )}
                  >
                    <Select.ItemIndicator
                      className='col-start-1'
                    >
                      <CgCheck
                        className='block'
                      />
                    </Select.ItemIndicator>

                    <Select.ItemText
                      className='col-start-2'
                    >
                      {label}
                    </Select.ItemText>
                  </Select.Item>
                ))}
            </Select.Popup>

            <Select.ScrollDownArrow
              className={clsx(
                'bottom-0 z-[1] p-2 flex h-6 w-full cursor-default items-center justify-center rounded-md',
                'bg-surface text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full',
                "before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]"
              )}
            />
          </Select.Positioner>
        </Select.Portal>
      </div>
    </Select.Root>
  )
}

export default SelectInput

import MenuPopup from '@/components/MenuPopup'
import { Menu } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { TbFlask2, TbLeaf, TbPerfume, TbSquarePlus } from 'react-icons/tb'
import NewRequestMenuItem from './NewRequestMenuItem'
import ArrowSvg from '@/components/ArrowSvg'

const NewRequestMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger
        className={clsx(
          'text-sm font-medium border border-surface2 px-4 py-2 rounded-md bg-background2 w-full',
          'flex items-center gap-2 hover:bg-surface2'
        )}
      >
        <TbSquarePlus
          size={18}
        />

        <span
          className='leading-none'
        >
          New request
        </span>
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner
          sideOffset={8}
        >
          <MenuPopup>
            <Menu.Arrow
              className={clsx(
                'data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 ',
                'data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90',
                'data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180'
              )}
            >
              <ArrowSvg />
            </Menu.Arrow>

            <NewRequestMenuItem
              label='New fragrance'
              href='/new/fragrance'
              icon={
                <TbPerfume
                  size={18}
                />
              }
            />

            <NewRequestMenuItem
              label='New accord'
              href='/new/accord'
              icon={
                <TbFlask2
                  size={18}
                />
              }
            />

            <NewRequestMenuItem
              label='New note'
              href='/new/note'
              icon={
                <TbLeaf
                  size={18}
                />
              }
            />
          </MenuPopup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}

export default NewRequestMenu

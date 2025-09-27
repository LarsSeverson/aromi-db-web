import NewRequestMenu from '@/features/fragrances/components/NewRequestMenu'
import { NAV } from '@/utils/nav'
import clsx from 'clsx'
import React from 'react'
import SideNavigationItem from './SideNavigationItem'
import { AccordionRoot } from './Accordion/AccordionRoot'

const SideNavigation = () => {

  return (
    <nav
      aria-label='Main navigation'
      className={clsx(
        'border-r h-full'
      )}
    >
      <div
        className='relative h-full'
      >
        <div
          className={clsx(
            'overflow-auto h-full',
            'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-surface',
            'hover:scrollbar-thumb-surface3 scrollbar-track-transparent',
            'transition-colors duration-200'
          )}
        >
          <div
            className='px-3 py-4'
          >
            <NewRequestMenu />
          </div>

          {NAV
            .map(section => (
              <AccordionRoot
                key={section.heading}
                className='px-3 py-3'
              >
                <div
                  className='px-2 pb-2 text-md font-semibold tracking-wide text-light'
                >
                  {section.heading}
                </div>

                {section.items.map(item => (
                  <SideNavigationItem
                    key={item.href}
                    {...item}
                  />
                ))}
              </AccordionRoot>
            ))}
        </div>
      </div>
    </nav>
  )
}

export default SideNavigation

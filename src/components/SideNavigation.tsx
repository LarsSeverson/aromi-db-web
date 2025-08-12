import { NAV } from '@/common/nav'
import NewRequestMenu from '@/features/requests/components/NewRequestMenu'
import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'

const SideNavigation = () => {
  const currentPath = useRouterState().location.pathname

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
              <div
                key={section.heading}
                className='px-3 py-4'
              >
                <div
                  className='px-2 pb-2 text-md font-semibold tracking-wide text-light'
                >
                  {section.heading}
                </div>

                <ul>
                  {section
                    .items
                    .map(item => {
                      const active = currentPath === item.href

                      return (
                        <li
                          key={item.href}
                          className='list-none box-border'
                        >
                          <Link
                            to={item.href}
                            aria-current={active ? 'page' : undefined}
                            data-active={active ?? undefined}
                            className={clsx(
                              'flex items-center justify-between rounded-md px-3 ml-4 py-[6.5px] text-sm text-light',
                              'hover:bg-background2 hover:outline hover:outline-1 hover:outline-surface',
                              active && 'bg-background2 text-foreground outline outline-1 outline-surface'
                            )}
                          >
                            <span>
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </nav>
  )
}

export default SideNavigation

import React from 'react'
import type { NavItem } from '@/utils/nav'
import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import { AccordionItem } from './Accordion/AccordionItem'
import { AccordionTrigger } from './Accordion/AccordionTrigger'
import { AccordionPanel } from './Accordion/AccordionPanel'
import { AccordionIcon } from './Accordion/AccordionIcon'

export interface SideNavigationItemProps extends NavItem {}

const SideNavigationItem = (props: SideNavigationItemProps) => {
  const { label, href, children, isActive } = props
  const currentPath = useRouterState().location.pathname
  const active = isActive?.(currentPath) ?? currentPath === href

  if (children != null && children.length > 0) {
    return (
      <AccordionItem
        className='ml-3 box-border'
        value={href}
      >
        <AccordionTrigger
          className={clsx(
            'flex items-center justify-between rounded-md text-sm text-light',
            'px-3 h-[33px] py-[3.5px]',
            'hover:bg-background2',
            active && 'bg-background2 text-foreground font-medium outline-1 outline-surface2'
          )}
          rightSlot={<AccordionIcon />}
        >
          {label}
        </AccordionTrigger>

        <AccordionPanel>
          {children.map(child => (
            <SideNavigationItem
              key={child.href}
              {...child} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    )
  }

  return (
    <ul
      className='flex flex-col group ml-3'
    >
      <li
        className='list-none box-border flex-1 h-full'
      >
        <Link
          to={href}
          aria-current={active ? 'page' : undefined}
          data-active={active ?? undefined}
          className={clsx(
            'flex items-center justify-between rounded-md text-sm text-light',
            'py-[6.5px] px-3',
            'hover:bg-background2',
            active && 'bg-background2 text-foreground font-medium outline-1 outline-surface2'
          )}
        >
          <span>
            {label}
          </span>
        </Link>
      </li>
    </ul>
  )
}

export default SideNavigationItem
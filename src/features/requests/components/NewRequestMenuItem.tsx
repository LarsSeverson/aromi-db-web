import MenuItem from '@/components/MenuItem'
import { Link } from '@tanstack/react-router'
import React from 'react'

export interface NewRequestMenuItemProps {
  label: string
  href: string
  icon?: React.ReactNode
}

const NewRequestMenuItem = (props: NewRequestMenuItemProps) => {
  const { label, href, icon } = props

  return (
    <MenuItem>
      <Link
        to={href}
        className='min-w-64 h-full py-3 pl-4 pr-8 flex items-center gap-2'
      >
        {icon}

        <span
          className='leading-none'
        >
          {label}
        </span>
      </Link>
    </MenuItem>
  )
}

export default NewRequestMenuItem

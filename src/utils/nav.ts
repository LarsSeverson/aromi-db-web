export interface NavItem {
  label: string
  href: string
  badge?: string
  children?: NavItem[]
  isActive?: (path: string) => boolean
}

export interface NavSection {
  heading: string
  items: NavItem[]
}

export const NAV: NavSection[] = [
  {
    heading: 'Browse',
    items: [
      {
        label: 'Fragrances',
        href: '/fragrances'
      },
      {
        label: 'Accords',
        href: '/accords'
      },
      {
        label: 'Notes',
        href: '/notes'
      }
    ]
  },
  {
    heading: 'Library',
    items: [
      {
        label: 'Favorites',
        href: '/me/favorites'
      },
      {
        label: 'Requests',
        href: '/me/requests'
      },
      {
        label: 'Drafts',
        href: '/drafts',
        children: [
          {
            label: 'Fragrances',
            href: '/drafts/fragrances',
            isActive: (path: string) => path.startsWith('/drafts/fragrances')
          },
          { label: 'Brands', href: '/drafts/brands' },
          { label: 'Accords', href: '/drafts/accords' },
          { label: 'Notes', href: '/drafts/notes' }
        ]
      }
    ]
  }
]

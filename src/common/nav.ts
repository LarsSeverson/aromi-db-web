export interface NavItem {
  label: string
  href: string
  badge?: string
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
        href: '/me/drafts'
      }
    ]
  }
]

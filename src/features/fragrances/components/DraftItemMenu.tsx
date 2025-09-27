import MenuItem from '@/components/MenuItem'
import MenuPopup from '@/components/MenuPopup'
import { Menu } from '@base-ui-components/react'
import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useNavigate } from '@tanstack/react-router'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { useMyFragranceRequests } from '@/features/users'
import { useDeleteFragranceRequest } from '../hooks/useDeleteFragranceRequest'

export interface DraftItemMenuProps {
  id: string
}

const DraftItemMenu = (props: DraftItemMenuProps) => {
  const { id } = props

  const navigate = useNavigate()
  const { fragranceRequests } = useMyFragranceRequests({ status: 'DRAFT' })
  const { deleteRequest } = useDeleteFragranceRequest()

  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleOnConfirmDelete = () => {
    setShowConfirmDialog(false)
    void deleteRequest({ id })

    const gotoDraft = fragranceRequests.find(d => d.id !== id)
    if (gotoDraft != null) {
      void navigate({ to: '/drafts/fragrance/$id', params: { id: gotoDraft.id } })
    } else {
      void navigate({ to: '/drafts/fragrance' })
    }
  }

  const handleOnDeleteClick = () => {
    setShowConfirmDialog(true)
  }

  return (
    <>
      <Menu.Root>
        <Menu.Trigger
          className='p-2 rounded-lg hover:bg-surface2'
        >
          <HiDotsHorizontal />
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Positioner
            sideOffset={8}
          >
            <MenuPopup>
              <MenuItem
                closeOnClick={false}
                onClick={handleOnDeleteClick}
              >
                <span
                  className='leading-none'
                >
                  Delete
                </span>
              </MenuItem>
            </MenuPopup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <ConfirmationDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        onConfirm={handleOnConfirmDelete}
      />
    </>
  )
}

export default DraftItemMenu

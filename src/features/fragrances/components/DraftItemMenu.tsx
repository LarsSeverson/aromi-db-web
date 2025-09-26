import MenuItem from '@/components/MenuItem'
import MenuPopup from '@/components/MenuPopup'
import { Menu } from '@base-ui-components/react'
import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useNavigate } from '@tanstack/react-router'
import { useFragranceDrafts } from '../hooks/useFragranceDrafts'
import { useDeleteFragranceDraft } from '../hooks/useDeleteFragranceDraft'
import ConfirmationDialog from '@/components/ConfirmationDialog'

export interface DraftItemMenuProps {
  id: string
}

const DraftItemMenu = (props: DraftItemMenuProps) => {
  const { id } = props

  const navigate = useNavigate()
  const { fragranceDrafts } = useFragranceDrafts()
  const { deleteDraft } = useDeleteFragranceDraft()

  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleOnConfirmDelete = () => {
    setShowConfirmDialog(false)
    void deleteDraft({ id })

    const gotoDraft = fragranceDrafts.find(d => d.id !== id)
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

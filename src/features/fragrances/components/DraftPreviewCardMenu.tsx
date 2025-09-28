import ConfirmationDialog from '@/components/ConfirmationDialog'
import MenuItem from '@/components/MenuItem'
import MenuPopup from '@/components/MenuPopup'
import { Menu } from '@base-ui-components/react'
import React, { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import type { IFragranceRequestDraftPreview } from '../types'
import { useDeleteFragranceRequest } from '../hooks/useDeleteFragranceRequest'

export interface DraftPreviewCardMenuProps {
  draft: IFragranceRequestDraftPreview
}

const DraftPreviewCardMenu = (props: DraftPreviewCardMenuProps) => {
  const { draft } = props
  const { id } = draft

  const { deleteRequest } = useDeleteFragranceRequest()

  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleOnConfirmDelete = () => {
    setShowConfirmDialog(false)
    void deleteRequest({ id })
  }

  const handleOnDeleteClick = () => {
    setShowConfirmDialog(true)
  }

  const handleOnTriggerClick = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <>
      <Menu.Root>
        <Menu.Trigger
          className='rounded-md hover:bg-surface2 p-2'
          onClick={handleOnTriggerClick}
        >
          <HiDotsVertical />
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

export default DraftPreviewCardMenu
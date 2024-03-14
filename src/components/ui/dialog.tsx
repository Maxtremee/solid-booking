import type { ComponentProps } from 'solid-js'

import { Dialog } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      closeTrigger: 'dialog__closeTrigger',
      description: 'dialog__description',
      positioner: 'dialog__positioner',
      backdrop: 'dialog__backdrop',
      trigger: 'dialog__trigger',
      content: 'dialog__content',
      title: 'dialog__title',
    },
    base: 'dialog',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Dialog.Root)
export const Backdrop = withContext(Dialog.Backdrop, 'backdrop')
export const CloseTrigger = withContext(Dialog.CloseTrigger, 'closeTrigger')
export const Content = withContext(Dialog.Content, 'content')
export const Description = withContext(Dialog.Description, 'description')
export const Positioner = withContext(Dialog.Positioner, 'positioner')
export const Title = withContext(Dialog.Title, 'title')
export const Trigger = withContext(Dialog.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type BackdropProps = {} & ComponentProps<typeof Backdrop>
export type CloseTriggerProps = {} & ComponentProps<typeof CloseTrigger>
export type ContentProps = {} & ComponentProps<typeof Content>
export type DescriptionProps = {} & ComponentProps<typeof Description>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TitleProps = {} & ComponentProps<typeof Title>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

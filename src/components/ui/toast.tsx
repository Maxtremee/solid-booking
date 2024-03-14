import type { ComponentProps } from 'solid-js'

import { tv } from 'tailwind-variants'
import { Toast } from '@ark-ui/solid'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      closeTrigger: 'toast__closeTrigger',
      description: 'toast__description',
      group: 'toast__group',
      title: 'toast__title',
      root: 'toast__root',
    },
    base: 'toast',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Toast.Root, 'root')
export const CloseTrigger = withContext(Toast.CloseTrigger, 'closeTrigger')
export const Description = withContext(Toast.Description, 'description')
export const Group = withContext(Toast.Group, 'group')
export const Title = withContext(Toast.Title, 'title')

export type RootProps = ComponentProps<typeof Root>
export type CloseTriggerProps = {} & ComponentProps<typeof CloseTrigger>
export type DescriptionProps = {} & ComponentProps<typeof Description>
export type GroupProps = {} & ComponentProps<typeof Group>
export type TitleProps = {} & ComponentProps<typeof Title>

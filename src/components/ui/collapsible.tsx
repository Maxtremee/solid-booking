import type { ComponentProps } from 'solid-js'

import { Collapsible } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      trigger: 'collapsible__trigger',
      content: 'collapsible__content',
      root: 'collapsible__root',
    },
    base: 'collapsible',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Collapsible.Root, 'root')
export const Content = withContext(Collapsible.Content, 'content')
export const Trigger = withContext(Collapsible.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type ContentProps = {} & ComponentProps<typeof Content>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

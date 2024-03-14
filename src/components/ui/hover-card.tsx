import type { ComponentProps } from 'solid-js'

import { HoverCard } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      positioner: 'hoverCard__positioner',
      arrowTip: 'hoverCard__arrowTip',
      trigger: 'hoverCard__trigger',
      content: 'hoverCard__content',
      arrow: 'hoverCard__arrow',
    },
    base: 'hoverCard',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(HoverCard.Root)
export const Arrow = withContext(HoverCard.Arrow, 'arrow')
export const ArrowTip = withContext(HoverCard.ArrowTip, 'arrowTip')
export const Content = withContext(HoverCard.Content, 'content')
export const Positioner = withContext(HoverCard.Positioner, 'positioner')
export const Trigger = withContext(HoverCard.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type ArrowProps = {} & ComponentProps<typeof Arrow>
export type ArrowTipProps = {} & ComponentProps<typeof ArrowTip>
export type ContentProps = {} & ComponentProps<typeof Content>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

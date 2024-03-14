import type { ComponentProps } from 'solid-js'

import { Tooltip } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      positioner: 'tooltip__positioner',
      arrowTip: 'tooltip__arrowTip',
      trigger: 'tooltip__trigger',
      content: 'tooltip__content',
      arrow: 'tooltip__arrow',
    },
    base: 'tooltip',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Tooltip.Root)
export const Arrow = withContext(Tooltip.Arrow, 'arrow')
export const ArrowTip = withContext(Tooltip.ArrowTip, 'arrowTip')
export const Content = withContext(Tooltip.Content, 'content')
export const Positioner = withContext(Tooltip.Positioner, 'positioner')
export const Trigger = withContext(Tooltip.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type ArrowProps = {} & ComponentProps<typeof Arrow>
export type ArrowTipProps = {} & ComponentProps<typeof ArrowTip>
export type ContentProps = {} & ComponentProps<typeof Content>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

import type { ComponentProps } from 'solid-js'

import { Popover } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      closeTrigger: 'popover__closeTrigger',
      description: 'popover__description',
      positioner: 'popover__positioner',
      indicator: 'popover__indicator',
      arrowTip: 'popover__arrowTip',
      trigger: 'popover__trigger',
      content: 'popover__content',
      anchor: 'popover__anchor',
      arrow: 'popover__arrow',
      title: 'popover__title',
    },
    base: 'popover',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Popover.Root)
export const Anchor = withContext(Popover.Anchor, 'anchor')
export const Arrow = withContext(Popover.Arrow, 'arrow')
export const ArrowTip = withContext(Popover.ArrowTip, 'arrowTip')
export const CloseTrigger = withContext(Popover.CloseTrigger, 'closeTrigger')
export const Content = withContext(Popover.Content, 'content')
export const Description = withContext(Popover.Description, 'description')
export const Indicator = withContext(Popover.Indicator, 'indicator')
export const Positioner = withContext(Popover.Positioner, 'positioner')
export const Title = withContext(Popover.Title, 'title')
export const Trigger = withContext(Popover.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type AnchorProps = {} & ComponentProps<typeof Anchor>
export type ArrowProps = {} & ComponentProps<typeof Arrow>
export type ArrowTipProps = {} & ComponentProps<typeof ArrowTip>
export type CloseTriggerProps = {} & ComponentProps<typeof CloseTrigger>
export type ContentProps = {} & ComponentProps<typeof Content>
export type DescriptionProps = {} & ComponentProps<typeof Description>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TitleProps = {} & ComponentProps<typeof Title>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

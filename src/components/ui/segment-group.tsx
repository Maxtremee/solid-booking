import type { ComponentProps } from 'solid-js'

import { SegmentGroup } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          itemControl: 'segmentGroup__itemControl--size_sm',
          indicator: 'segmentGroup__indicator--size_sm',
          itemText: 'segmentGroup__itemText--size_sm',
          label: 'segmentGroup__label--size_sm',
          root: 'segmentGroup__root--size_sm',
          item: 'segmentGroup__item--size_sm',
        },
        md: {
          itemControl: 'segmentGroup__itemControl--size_md',
          indicator: 'segmentGroup__indicator--size_md',
          itemText: 'segmentGroup__itemText--size_md',
          label: 'segmentGroup__label--size_md',
          root: 'segmentGroup__root--size_md',
          item: 'segmentGroup__item--size_md',
        },
      },
    },
    slots: {
      itemControl: 'segmentGroup__itemControl',
      indicator: 'segmentGroup__indicator',
      itemText: 'segmentGroup__itemText',
      label: 'segmentGroup__label',
      root: 'segmentGroup__root',
      item: 'segmentGroup__item',
    },
    defaultVariants: { size: 'md' },
    base: 'segmentGroup',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(SegmentGroup.Root, 'root')
export const Indicator = withContext(SegmentGroup.Indicator, 'indicator')
export const Item = withContext(SegmentGroup.Item, 'item')
export const ItemControl = withContext(SegmentGroup.ItemControl, 'itemControl')
export const ItemText = withContext(SegmentGroup.ItemText, 'itemText')
export const Label = withContext(SegmentGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemControlProps = {} & ComponentProps<typeof ItemControl>
export type ItemTextProps = {} & ComponentProps<typeof ItemText>
export type LabelProps = {} & ComponentProps<typeof Label>

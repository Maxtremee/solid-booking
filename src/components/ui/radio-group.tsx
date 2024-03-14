import type { ComponentProps } from 'solid-js'

import { RadioGroup } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          itemControl: 'radioGroup__itemControl--size_sm',
          indicator: 'radioGroup__indicator--size_sm',
          itemText: 'radioGroup__itemText--size_sm',
          label: 'radioGroup__label--size_sm',
          root: 'radioGroup__root--size_sm',
          item: 'radioGroup__item--size_sm',
        },
        md: {
          itemControl: 'radioGroup__itemControl--size_md',
          indicator: 'radioGroup__indicator--size_md',
          itemText: 'radioGroup__itemText--size_md',
          label: 'radioGroup__label--size_md',
          root: 'radioGroup__root--size_md',
          item: 'radioGroup__item--size_md',
        },
        lg: {
          itemControl: 'radioGroup__itemControl--size_lg',
          indicator: 'radioGroup__indicator--size_lg',
          itemText: 'radioGroup__itemText--size_lg',
          label: 'radioGroup__label--size_lg',
          root: 'radioGroup__root--size_lg',
          item: 'radioGroup__item--size_lg',
        },
      },
    },
    slots: {
      itemControl: 'radioGroup__itemControl',
      indicator: 'radioGroup__indicator',
      itemText: 'radioGroup__itemText',
      label: 'radioGroup__label',
      root: 'radioGroup__root',
      item: 'radioGroup__item',
    },
    defaultVariants: { size: 'md' },
    base: 'radioGroup',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(RadioGroup.Root, 'root')
export const Indicator = withContext(RadioGroup.Indicator, 'indicator')
export const Item = withContext(RadioGroup.Item, 'item')
export const ItemControl = withContext(RadioGroup.ItemControl, 'itemControl')
export const ItemText = withContext(RadioGroup.ItemText, 'itemText')
export const Label = withContext(RadioGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemControlProps = {} & ComponentProps<typeof ItemControl>
export type ItemTextProps = {} & ComponentProps<typeof ItemText>
export type LabelProps = {} & ComponentProps<typeof Label>

import type { ComponentProps } from 'solid-js'

import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          itemControl: 'radioButtonGroup__itemControl--size_sm',
          indicator: 'radioButtonGroup__indicator--size_sm',
          itemText: 'radioButtonGroup__itemText--size_sm',
          label: 'radioButtonGroup__label--size_sm',
          root: 'radioButtonGroup__root--size_sm',
          item: 'radioButtonGroup__item--size_sm',
        },
        md: {
          itemControl: 'radioButtonGroup__itemControl--size_md',
          indicator: 'radioButtonGroup__indicator--size_md',
          itemText: 'radioButtonGroup__itemText--size_md',
          label: 'radioButtonGroup__label--size_md',
          root: 'radioButtonGroup__root--size_md',
          item: 'radioButtonGroup__item--size_md',
        },
        lg: {
          itemControl: 'radioButtonGroup__itemControl--size_lg',
          indicator: 'radioButtonGroup__indicator--size_lg',
          itemText: 'radioButtonGroup__itemText--size_lg',
          label: 'radioButtonGroup__label--size_lg',
          root: 'radioButtonGroup__root--size_lg',
          item: 'radioButtonGroup__item--size_lg',
        },
        xl: {
          itemControl: 'radioButtonGroup__itemControl--size_xl',
          indicator: 'radioButtonGroup__indicator--size_xl',
          itemText: 'radioButtonGroup__itemText--size_xl',
          label: 'radioButtonGroup__label--size_xl',
          root: 'radioButtonGroup__root--size_xl',
          item: 'radioButtonGroup__item--size_xl',
        },
      },
      variant: {
        outline: {
          itemControl: 'radioButtonGroup__itemControl--variant_outline',
          indicator: 'radioButtonGroup__indicator--variant_outline',
          itemText: 'radioButtonGroup__itemText--variant_outline',
          label: 'radioButtonGroup__label--variant_outline',
          root: 'radioButtonGroup__root--variant_outline',
          item: 'radioButtonGroup__item--variant_outline',
        },
        solid: {
          itemControl: 'radioButtonGroup__itemControl--variant_solid',
          indicator: 'radioButtonGroup__indicator--variant_solid',
          itemText: 'radioButtonGroup__itemText--variant_solid',
          label: 'radioButtonGroup__label--variant_solid',
          root: 'radioButtonGroup__root--variant_solid',
          item: 'radioButtonGroup__item--variant_solid',
        },
      },
    },
    slots: {
      itemControl: 'radioButtonGroup__itemControl',
      indicator: 'radioButtonGroup__indicator',
      itemText: 'radioButtonGroup__itemText',
      label: 'radioButtonGroup__label',
      root: 'radioButtonGroup__root',
      item: 'radioButtonGroup__item',
    },
    defaultVariants: { variant: 'solid', size: 'md' },
    base: 'radioButtonGroup',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ArkRadioButtonGroup.Root, 'root')
export const Indicator = withContext(ArkRadioButtonGroup.Indicator, 'indicator')
export const Item = withContext(ArkRadioButtonGroup.Item, 'item')
export const ItemControl = withContext(ArkRadioButtonGroup.ItemControl, 'itemControl')
export const ItemText = withContext(ArkRadioButtonGroup.ItemText, 'itemText')
export const Label = withContext(ArkRadioButtonGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemControlProps = {} & ComponentProps<typeof ItemControl>
export type ItemTextProps = {} & ComponentProps<typeof ItemText>
export type LabelProps = {} & ComponentProps<typeof Label>

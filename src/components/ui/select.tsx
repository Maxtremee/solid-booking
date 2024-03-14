import type { ComponentProps } from 'solid-js'

import { Select } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          itemGroupLabel: 'select__itemGroupLabel--size_sm',
          itemIndicator: 'select__itemIndicator--size_sm',
          clearTrigger: 'select__clearTrigger--size_sm',
          positioner: 'select__positioner--size_sm',
          indicator: 'select__indicator--size_sm',
          itemGroup: 'select__itemGroup--size_sm',
          valueText: 'select__valueText--size_sm',
          itemText: 'select__itemText--size_sm',
          trigger: 'select__trigger--size_sm',
          content: 'select__content--size_sm',
          control: 'select__control--size_sm',
          label: 'select__label--size_sm',
          item: 'select__item--size_sm',
          root: 'select__root--size_sm',
        },
        md: {
          itemGroupLabel: 'select__itemGroupLabel--size_md',
          itemIndicator: 'select__itemIndicator--size_md',
          clearTrigger: 'select__clearTrigger--size_md',
          positioner: 'select__positioner--size_md',
          indicator: 'select__indicator--size_md',
          itemGroup: 'select__itemGroup--size_md',
          valueText: 'select__valueText--size_md',
          itemText: 'select__itemText--size_md',
          trigger: 'select__trigger--size_md',
          content: 'select__content--size_md',
          control: 'select__control--size_md',
          label: 'select__label--size_md',
          item: 'select__item--size_md',
          root: 'select__root--size_md',
        },
        lg: {
          itemGroupLabel: 'select__itemGroupLabel--size_lg',
          itemIndicator: 'select__itemIndicator--size_lg',
          clearTrigger: 'select__clearTrigger--size_lg',
          positioner: 'select__positioner--size_lg',
          indicator: 'select__indicator--size_lg',
          itemGroup: 'select__itemGroup--size_lg',
          valueText: 'select__valueText--size_lg',
          itemText: 'select__itemText--size_lg',
          trigger: 'select__trigger--size_lg',
          content: 'select__content--size_lg',
          control: 'select__control--size_lg',
          label: 'select__label--size_lg',
          item: 'select__item--size_lg',
          root: 'select__root--size_lg',
        },
      },
      variant: {
        outline: {
          itemGroupLabel: 'select__itemGroupLabel--variant_outline',
          itemIndicator: 'select__itemIndicator--variant_outline',
          clearTrigger: 'select__clearTrigger--variant_outline',
          positioner: 'select__positioner--variant_outline',
          indicator: 'select__indicator--variant_outline',
          itemGroup: 'select__itemGroup--variant_outline',
          valueText: 'select__valueText--variant_outline',
          itemText: 'select__itemText--variant_outline',
          trigger: 'select__trigger--variant_outline',
          content: 'select__content--variant_outline',
          control: 'select__control--variant_outline',
          label: 'select__label--variant_outline',
          item: 'select__item--variant_outline',
          root: 'select__root--variant_outline',
        },
        ghost: {
          itemGroupLabel: 'select__itemGroupLabel--variant_ghost',
          itemIndicator: 'select__itemIndicator--variant_ghost',
          clearTrigger: 'select__clearTrigger--variant_ghost',
          positioner: 'select__positioner--variant_ghost',
          indicator: 'select__indicator--variant_ghost',
          itemGroup: 'select__itemGroup--variant_ghost',
          valueText: 'select__valueText--variant_ghost',
          itemText: 'select__itemText--variant_ghost',
          trigger: 'select__trigger--variant_ghost',
          content: 'select__content--variant_ghost',
          control: 'select__control--variant_ghost',
          label: 'select__label--variant_ghost',
          item: 'select__item--variant_ghost',
          root: 'select__root--variant_ghost',
        },
      },
    },
    slots: {
      itemGroupLabel: 'select__itemGroupLabel',
      itemIndicator: 'select__itemIndicator',
      clearTrigger: 'select__clearTrigger',
      positioner: 'select__positioner',
      indicator: 'select__indicator',
      itemGroup: 'select__itemGroup',
      valueText: 'select__valueText',
      itemText: 'select__itemText',
      trigger: 'select__trigger',
      content: 'select__content',
      control: 'select__control',
      label: 'select__label',
      item: 'select__item',
      root: 'select__root',
    },
    defaultVariants: { variant: 'outline', size: 'md' },
    base: 'select',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Select.Root, 'root')
export const ClearTrigger = withContext(Select.ClearTrigger, 'clearTrigger')
export const Content = withContext(Select.Content, 'content')
export const Control = withContext(Select.Control, 'control')
export const Indicator = withContext(Select.Indicator, 'indicator')
export const Item = withContext(Select.Item, 'item')
export const ItemGroup = withContext(Select.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Select.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Select.ItemIndicator, 'itemIndicator')
export const ItemText = withContext(Select.ItemText, 'itemText')
export const Label = withContext(Select.Label, 'label')
export const Positioner = withContext(Select.Positioner, 'positioner')
export const Trigger = withContext(Select.Trigger, 'trigger')
export const ValueText = withContext(Select.ValueText, 'valueText')

export type RootProps = ComponentProps<typeof Root>
export type ClearTriggerProps = {} & ComponentProps<typeof ClearTrigger>
export type ContentProps = {} & ComponentProps<typeof Content>
export type ControlProps = {} & ComponentProps<typeof Control>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemGroupProps = {} & ComponentProps<typeof ItemGroup>
export type ItemGroupLabelProps = {} & ComponentProps<typeof ItemGroupLabel>
export type ItemIndicatorProps = {} & ComponentProps<typeof ItemIndicator>
export type ItemTextProps = {} & ComponentProps<typeof ItemText>
export type LabelProps = {} & ComponentProps<typeof Label>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TriggerProps = {} & ComponentProps<typeof Trigger>
export type ValueTextProps = {} & ComponentProps<typeof ValueText>

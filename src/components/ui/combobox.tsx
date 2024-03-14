import type { ComponentProps } from 'solid-js'

import { Combobox } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          itemGroupLabel: 'combobox__itemGroupLabel--size_sm',
          itemIndicator: 'combobox__itemIndicator--size_sm',
          clearTrigger: 'combobox__clearTrigger--size_sm',
          positioner: 'combobox__positioner--size_sm',
          itemGroup: 'combobox__itemGroup--size_sm',
          itemText: 'combobox__itemText--size_sm',
          control: 'combobox__control--size_sm',
          trigger: 'combobox__trigger--size_sm',
          content: 'combobox__content--size_sm',
          label: 'combobox__label--size_sm',
          input: 'combobox__input--size_sm',
          root: 'combobox__root--size_sm',
          item: 'combobox__item--size_sm',
        },
        md: {
          itemGroupLabel: 'combobox__itemGroupLabel--size_md',
          itemIndicator: 'combobox__itemIndicator--size_md',
          clearTrigger: 'combobox__clearTrigger--size_md',
          positioner: 'combobox__positioner--size_md',
          itemGroup: 'combobox__itemGroup--size_md',
          itemText: 'combobox__itemText--size_md',
          control: 'combobox__control--size_md',
          trigger: 'combobox__trigger--size_md',
          content: 'combobox__content--size_md',
          label: 'combobox__label--size_md',
          input: 'combobox__input--size_md',
          root: 'combobox__root--size_md',
          item: 'combobox__item--size_md',
        },
        lg: {
          itemGroupLabel: 'combobox__itemGroupLabel--size_lg',
          itemIndicator: 'combobox__itemIndicator--size_lg',
          clearTrigger: 'combobox__clearTrigger--size_lg',
          positioner: 'combobox__positioner--size_lg',
          itemGroup: 'combobox__itemGroup--size_lg',
          itemText: 'combobox__itemText--size_lg',
          control: 'combobox__control--size_lg',
          trigger: 'combobox__trigger--size_lg',
          content: 'combobox__content--size_lg',
          label: 'combobox__label--size_lg',
          input: 'combobox__input--size_lg',
          root: 'combobox__root--size_lg',
          item: 'combobox__item--size_lg',
        },
      },
    },
    slots: {
      itemGroupLabel: 'combobox__itemGroupLabel',
      itemIndicator: 'combobox__itemIndicator',
      clearTrigger: 'combobox__clearTrigger',
      positioner: 'combobox__positioner',
      itemGroup: 'combobox__itemGroup',
      itemText: 'combobox__itemText',
      control: 'combobox__control',
      trigger: 'combobox__trigger',
      content: 'combobox__content',
      label: 'combobox__label',
      input: 'combobox__input',
      root: 'combobox__root',
      item: 'combobox__item',
    },
    defaultVariants: { size: 'md' },
    base: 'combobox',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Combobox.Root, 'root')
export const ClearTrigger = withContext(Combobox.ClearTrigger, 'clearTrigger')
export const Content = withContext(Combobox.Content, 'content')
export const Control = withContext(Combobox.Control, 'control')
export const Input = withContext(Combobox.Input, 'input')
export const Item = withContext(Combobox.Item, 'item')
export const ItemGroup = withContext(Combobox.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Combobox.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Combobox.ItemIndicator, 'itemIndicator')
export const ItemText = withContext(Combobox.ItemText, 'itemText')
export const Label = withContext(Combobox.Label, 'label')
export const Positioner = withContext(Combobox.Positioner, 'positioner')
export const Trigger = withContext(Combobox.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type ClearTriggerProps = {} & ComponentProps<typeof ClearTrigger>
export type ContentProps = {} & ComponentProps<typeof Content>
export type ControlProps = {} & ComponentProps<typeof Control>
export type InputProps = {} & ComponentProps<typeof Input>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemGroupProps = {} & ComponentProps<typeof ItemGroup>
export type ItemGroupLabelProps = {} & ComponentProps<typeof ItemGroupLabel>
export type ItemIndicatorProps = {} & ComponentProps<typeof ItemIndicator>
export type ItemTextProps = {} & ComponentProps<typeof ItemText>
export type LabelProps = {} & ComponentProps<typeof Label>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

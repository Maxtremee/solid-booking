import type { ComponentProps } from 'solid-js'

import { TagsInput } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        md: {
          itemDeleteTrigger: 'tagsInput__itemDeleteTrigger--size_md',
          clearTrigger: 'tagsInput__clearTrigger--size_md',
          itemPreview: 'tagsInput__itemPreview--size_md',
          itemInput: 'tagsInput__itemInput--size_md',
          itemText: 'tagsInput__itemText--size_md',
          control: 'tagsInput__control--size_md',
          label: 'tagsInput__label--size_md',
          input: 'tagsInput__input--size_md',
          root: 'tagsInput__root--size_md',
          item: 'tagsInput__item--size_md',
        },
      },
    },
    slots: {
      itemDeleteTrigger: 'tagsInput__itemDeleteTrigger',
      clearTrigger: 'tagsInput__clearTrigger',
      itemPreview: 'tagsInput__itemPreview',
      itemInput: 'tagsInput__itemInput',
      itemText: 'tagsInput__itemText',
      control: 'tagsInput__control',
      label: 'tagsInput__label',
      input: 'tagsInput__input',
      root: 'tagsInput__root',
      item: 'tagsInput__item',
    },
    defaultVariants: { size: 'md' },
    base: 'tagsInput',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(TagsInput.Root, 'root')
export const ClearTrigger = withContext(TagsInput.ClearTrigger, 'clearTrigger')
export const Control = withContext(TagsInput.Control, 'control')
export const Input = withContext(TagsInput.Input, 'input')
export const Item = withContext(TagsInput.Item, 'item')
export const ItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')
export const ItemInput = withContext(TagsInput.ItemInput, 'itemInput')
export const ItemPreview = withContext(TagsInput.ItemPreview, 'itemPreview')
export const ItemText = withContext(TagsInput.ItemText, 'itemText')
export const Label = withContext(TagsInput.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export type ClearTriggerProps = {} & ComponentProps<typeof ClearTrigger>
export type ControlProps = {} & ComponentProps<typeof Control>
export type InputProps = {} & ComponentProps<typeof Input>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemDeleteTriggerProps = {} & ComponentProps<typeof ItemDeleteTrigger>
export type ItemInputProps = {} & ComponentProps<typeof ItemInput>
export type ItemPreviewProps = {} & ComponentProps<typeof ItemPreview>
export type ItemTextProps = {} & ComponentProps<typeof ItemText>
export type LabelProps = {} & ComponentProps<typeof Label>

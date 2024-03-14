import type { ComponentProps } from 'solid-js'

import { Accordion } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        md: {
          itemIndicator: 'accordion__itemIndicator--size_md',
          itemTrigger: 'accordion__itemTrigger--size_md',
          itemContent: 'accordion__itemContent--size_md',
          root: 'accordion__root--size_md',
          item: 'accordion__item--size_md',
        },
      },
    },
    slots: {
      itemIndicator: 'accordion__itemIndicator',
      itemTrigger: 'accordion__itemTrigger',
      itemContent: 'accordion__itemContent',
      root: 'accordion__root',
      item: 'accordion__item',
    },
    defaultVariants: { size: 'md' },
    base: 'accordion',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Accordion.Root, 'root')
export const Item = withContext(Accordion.Item, 'item')
export const ItemContent = withContext(Accordion.ItemContent, 'itemContent')
export const ItemIndicator = withContext(Accordion.ItemIndicator, 'itemIndicator')
export const ItemTrigger = withContext(Accordion.ItemTrigger, 'itemTrigger')

export type RootProps = ComponentProps<typeof Root>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemContentProps = {} & ComponentProps<typeof ItemContent>
export type ItemIndicatorProps = {} & ComponentProps<typeof ItemIndicator>
export type ItemTriggerProps = {} & ComponentProps<typeof ItemTrigger>

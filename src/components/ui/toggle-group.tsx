import type { ComponentProps } from 'solid-js'

import { ToggleGroup } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      variant: {
        outline: {
          root: 'toggleGroup__root--variant_outline',
          item: 'toggleGroup__item--variant_outline',
        },
        ghost: {
          root: 'toggleGroup__root--variant_ghost',
          item: 'toggleGroup__item--variant_ghost',
        },
      },
      size: {
        sm: { root: 'toggleGroup__root--size_sm', item: 'toggleGroup__item--size_sm' },
        md: { root: 'toggleGroup__root--size_md', item: 'toggleGroup__item--size_md' },
        lg: { root: 'toggleGroup__root--size_lg', item: 'toggleGroup__item--size_lg' },
      },
    },
    slots: { root: 'toggleGroup__root', item: 'toggleGroup__item' },
    defaultVariants: { variant: 'outline', size: 'md' },
    base: 'toggleGroup',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ToggleGroup.Root, 'root')
export const Item = withContext(ToggleGroup.Item, 'item')

export type RootProps = ComponentProps<typeof Root>
export type ItemProps = {} & ComponentProps<typeof Item>

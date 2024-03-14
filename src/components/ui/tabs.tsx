import type { ComponentProps } from 'solid-js'

import { tv } from 'tailwind-variants'
import { Tabs } from '@ark-ui/solid'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      variant: {
        enclosed: {
          indicator: 'tabs__indicator--variant_enclosed',
          trigger: 'tabs__trigger--variant_enclosed',
          content: 'tabs__content--variant_enclosed',
          root: 'tabs__root--variant_enclosed',
          list: 'tabs__list--variant_enclosed',
        },
        outline: {
          indicator: 'tabs__indicator--variant_outline',
          trigger: 'tabs__trigger--variant_outline',
          content: 'tabs__content--variant_outline',
          root: 'tabs__root--variant_outline',
          list: 'tabs__list--variant_outline',
        },
        line: {
          indicator: 'tabs__indicator--variant_line',
          trigger: 'tabs__trigger--variant_line',
          content: 'tabs__content--variant_line',
          root: 'tabs__root--variant_line',
          list: 'tabs__list--variant_line',
        },
      },
      size: {
        sm: {
          indicator: 'tabs__indicator--size_sm',
          trigger: 'tabs__trigger--size_sm',
          content: 'tabs__content--size_sm',
          root: 'tabs__root--size_sm',
          list: 'tabs__list--size_sm',
        },
        md: {
          indicator: 'tabs__indicator--size_md',
          trigger: 'tabs__trigger--size_md',
          content: 'tabs__content--size_md',
          root: 'tabs__root--size_md',
          list: 'tabs__list--size_md',
        },
        lg: {
          indicator: 'tabs__indicator--size_lg',
          trigger: 'tabs__trigger--size_lg',
          content: 'tabs__content--size_lg',
          root: 'tabs__root--size_lg',
          list: 'tabs__list--size_lg',
        },
      },
    },
    slots: {
      indicator: 'tabs__indicator',
      trigger: 'tabs__trigger',
      content: 'tabs__content',
      root: 'tabs__root',
      list: 'tabs__list',
    },
    defaultVariants: { variant: 'line', size: 'md' },
    base: 'tabs',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Tabs.Root, 'root')
export const Content = withContext(Tabs.Content, 'content')
export const Indicator = withContext(Tabs.Indicator, 'indicator')
export const List = withContext(Tabs.List, 'list')
export const Trigger = withContext(Tabs.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type ContentProps = {} & ComponentProps<typeof Content>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type ListProps = {} & ComponentProps<typeof List>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

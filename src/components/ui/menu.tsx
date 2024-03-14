import type { ComponentProps } from 'solid-js'

import { tv } from 'tailwind-variants'
import { Menu } from '@ark-ui/solid'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        xs: {
          optionItemIndicator: 'menu__optionItemIndicator--size_xs',
          contextTrigger: 'menu__contextTrigger--size_xs',
          optionItemText: 'menu__optionItemText--size_xs',
          itemGroupLabel: 'menu__itemGroupLabel--size_xs',
          triggerItem: 'menu__triggerItem--size_xs',
          positioner: 'menu__positioner--size_xs',
          optionItem: 'menu__optionItem--size_xs',
          indicator: 'menu__indicator--size_xs',
          separator: 'menu__separator--size_xs',
          itemGroup: 'menu__itemGroup--size_xs',
          arrowTip: 'menu__arrowTip--size_xs',
          trigger: 'menu__trigger--size_xs',
          content: 'menu__content--size_xs',
          arrow: 'menu__arrow--size_xs',
          item: 'menu__item--size_xs',
        },
        sm: {
          optionItemIndicator: 'menu__optionItemIndicator--size_sm',
          contextTrigger: 'menu__contextTrigger--size_sm',
          optionItemText: 'menu__optionItemText--size_sm',
          itemGroupLabel: 'menu__itemGroupLabel--size_sm',
          triggerItem: 'menu__triggerItem--size_sm',
          positioner: 'menu__positioner--size_sm',
          optionItem: 'menu__optionItem--size_sm',
          indicator: 'menu__indicator--size_sm',
          separator: 'menu__separator--size_sm',
          itemGroup: 'menu__itemGroup--size_sm',
          arrowTip: 'menu__arrowTip--size_sm',
          trigger: 'menu__trigger--size_sm',
          content: 'menu__content--size_sm',
          arrow: 'menu__arrow--size_sm',
          item: 'menu__item--size_sm',
        },
        md: {
          optionItemIndicator: 'menu__optionItemIndicator--size_md',
          contextTrigger: 'menu__contextTrigger--size_md',
          optionItemText: 'menu__optionItemText--size_md',
          itemGroupLabel: 'menu__itemGroupLabel--size_md',
          triggerItem: 'menu__triggerItem--size_md',
          positioner: 'menu__positioner--size_md',
          optionItem: 'menu__optionItem--size_md',
          indicator: 'menu__indicator--size_md',
          separator: 'menu__separator--size_md',
          itemGroup: 'menu__itemGroup--size_md',
          arrowTip: 'menu__arrowTip--size_md',
          trigger: 'menu__trigger--size_md',
          content: 'menu__content--size_md',
          arrow: 'menu__arrow--size_md',
          item: 'menu__item--size_md',
        },
        lg: {
          optionItemIndicator: 'menu__optionItemIndicator--size_lg',
          contextTrigger: 'menu__contextTrigger--size_lg',
          optionItemText: 'menu__optionItemText--size_lg',
          itemGroupLabel: 'menu__itemGroupLabel--size_lg',
          triggerItem: 'menu__triggerItem--size_lg',
          positioner: 'menu__positioner--size_lg',
          optionItem: 'menu__optionItem--size_lg',
          indicator: 'menu__indicator--size_lg',
          separator: 'menu__separator--size_lg',
          itemGroup: 'menu__itemGroup--size_lg',
          arrowTip: 'menu__arrowTip--size_lg',
          trigger: 'menu__trigger--size_lg',
          content: 'menu__content--size_lg',
          arrow: 'menu__arrow--size_lg',
          item: 'menu__item--size_lg',
        },
      },
    },
    slots: {
      optionItemIndicator: 'menu__optionItemIndicator',
      contextTrigger: 'menu__contextTrigger',
      optionItemText: 'menu__optionItemText',
      itemGroupLabel: 'menu__itemGroupLabel',
      triggerItem: 'menu__triggerItem',
      positioner: 'menu__positioner',
      optionItem: 'menu__optionItem',
      indicator: 'menu__indicator',
      separator: 'menu__separator',
      itemGroup: 'menu__itemGroup',
      arrowTip: 'menu__arrowTip',
      trigger: 'menu__trigger',
      content: 'menu__content',
      arrow: 'menu__arrow',
      item: 'menu__item',
    },
    defaultVariants: { size: 'md' },
    base: 'menu',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Menu.Root)
export const Arrow = withContext(Menu.Arrow, 'arrow')
export const ArrowTip = withContext(Menu.ArrowTip, 'arrowTip')
export const Content = withContext(Menu.Content, 'content')
export const ContextTrigger = withContext(Menu.ContextTrigger, 'contextTrigger')
export const Item = withContext(Menu.Item, 'item')
export const ItemGroup = withContext(Menu.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Menu.ItemGroupLabel, 'itemGroupLabel')
export const OptionItem = withContext(Menu.OptionItem, 'optionItem')
export const Positioner = withContext(Menu.Positioner, 'positioner')
export const Separator = withContext(Menu.Separator, 'separator')
export const Trigger = withContext(Menu.Trigger, 'trigger')
export const TriggerItem = withContext(Menu.TriggerItem, 'triggerItem')

export type RootProps = ComponentProps<typeof Root>
export type ArrowProps = {} & ComponentProps<typeof Arrow>
export type ArrowTipProps = {} & ComponentProps<typeof ArrowTip>
export type ContentProps = {} & ComponentProps<typeof Content>
export type ContextTriggerProps = {} & ComponentProps<typeof ContextTrigger>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemGroupProps = {} & ComponentProps<typeof ItemGroup>
export type ItemGroupLabelProps = {} & ComponentProps<typeof ItemGroupLabel>
export type OptionItemProps = {} & ComponentProps<typeof OptionItem>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type SeparatorProps = {} & ComponentProps<typeof Separator>
export type TriggerProps = {} & ComponentProps<typeof Trigger>
export type TriggerItemProps = {} & ComponentProps<typeof TriggerItem>

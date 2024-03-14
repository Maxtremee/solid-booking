import type { ComponentProps } from 'solid-js'

import { Carousel } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          indicatorGroup: 'carousel__indicatorGroup--size_sm',
          nextTrigger: 'carousel__nextTrigger--size_sm',
          prevTrigger: 'carousel__prevTrigger--size_sm',
          itemGroup: 'carousel__itemGroup--size_sm',
          indicator: 'carousel__indicator--size_sm',
          viewport: 'carousel__viewport--size_sm',
          control: 'carousel__control--size_sm',
          root: 'carousel__root--size_sm',
          item: 'carousel__item--size_sm',
        },
        md: {
          indicatorGroup: 'carousel__indicatorGroup--size_md',
          nextTrigger: 'carousel__nextTrigger--size_md',
          prevTrigger: 'carousel__prevTrigger--size_md',
          itemGroup: 'carousel__itemGroup--size_md',
          indicator: 'carousel__indicator--size_md',
          viewport: 'carousel__viewport--size_md',
          control: 'carousel__control--size_md',
          root: 'carousel__root--size_md',
          item: 'carousel__item--size_md',
        },
      },
    },
    slots: {
      indicatorGroup: 'carousel__indicatorGroup',
      nextTrigger: 'carousel__nextTrigger',
      prevTrigger: 'carousel__prevTrigger',
      itemGroup: 'carousel__itemGroup',
      indicator: 'carousel__indicator',
      viewport: 'carousel__viewport',
      control: 'carousel__control',
      root: 'carousel__root',
      item: 'carousel__item',
    },
    defaultVariants: { size: 'md' },
    base: 'carousel',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Carousel.Root, 'root')
export const Control = withContext(Carousel.Control, 'control')
export const Indicator = withContext(Carousel.Indicator, 'indicator')
export const IndicatorGroup = withContext(Carousel.IndicatorGroup, 'indicatorGroup')
export const Item = withContext(Carousel.Item, 'item')
export const ItemGroup = withContext(Carousel.ItemGroup, 'itemGroup')
export const NextTrigger = withContext(Carousel.NextTrigger, 'nextTrigger')
export const PrevTrigger = withContext(Carousel.PrevTrigger, 'prevTrigger')
export const Viewport = withContext(Carousel.Viewport, 'viewport')

export type RootProps = ComponentProps<typeof Root>
export type ControlProps = {} & ComponentProps<typeof Control>
export type IndicatorProps = {} & ComponentProps<typeof Indicator>
export type IndicatorGroupProps = {} & ComponentProps<typeof IndicatorGroup>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemGroupProps = {} & ComponentProps<typeof ItemGroup>
export type NextTriggerProps = {} & ComponentProps<typeof NextTrigger>
export type PrevTriggerProps = {} & ComponentProps<typeof PrevTrigger>
export type ViewportProps = {} & ComponentProps<typeof Viewport>

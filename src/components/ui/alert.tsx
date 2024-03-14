import type { ComponentProps } from 'solid-js'

import { tv } from 'tailwind-variants'
import { ark } from '@ark-ui/solid'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      description: 'alert__description',
      content: 'alert__content',
      title: 'alert__title',
      root: 'alert__root',
      icon: 'alert__icon',
    },
    base: 'alert',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ark.div, 'root')
export const Content = withContext(ark.div, 'content')
export const Description = withContext(ark.div, 'description')
export const Icon = withContext(ark.svg, 'icon')
export const Title = withContext(ark.h5, 'title')

export type RootProps = ComponentProps<typeof Root>
export type ContentProps = {} & ComponentProps<typeof Content>
export type DescriptionProps = {} & ComponentProps<typeof Description>
export type IconProps = {} & ComponentProps<typeof Icon>
export type TitleProps = {} & ComponentProps<typeof Title>

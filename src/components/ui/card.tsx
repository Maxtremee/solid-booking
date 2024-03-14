import type { ComponentProps } from 'solid-js'

import { tv } from 'tailwind-variants'
import { ark } from '@ark-ui/solid'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      description: 'card__description',
      header: 'card__header',
      footer: 'card__footer',
      title: 'card__title',
      root: 'card__root',
      body: 'card__body',
    },
    base: 'card',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ark.div, 'root')
export const Body = withContext(ark.div, 'body')
export const Description = withContext(ark.div, 'description')
export const Footer = withContext(ark.div, 'footer')
export const Header = withContext(ark.div, 'header')
export const Title = withContext(ark.h3, 'title')

export type RootProps = ComponentProps<typeof Root>
export type BodyProps = {} & ComponentProps<typeof Body>
export type DescriptionProps = {} & ComponentProps<typeof Description>
export type FooterProps = {} & ComponentProps<typeof Footer>
export type HeaderProps = {} & ComponentProps<typeof Header>
export type TitleProps = {} & ComponentProps<typeof Title>

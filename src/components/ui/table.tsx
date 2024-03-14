import type { ComponentProps } from 'solid-js'

import { tv } from 'tailwind-variants'
import { ark } from '@ark-ui/solid'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      variant: {
        outline: {
          caption: 'table__caption--variant_outline',
          footer: 'table__footer--variant_outline',
          header: 'table__header--variant_outline',
          root: 'table__root--variant_outline',
          body: 'table__body--variant_outline',
          cell: 'table__cell--variant_outline',
          head: 'table__head--variant_outline',
          row: 'table__row--variant_outline',
        },
        plain: {
          caption: 'table__caption--variant_plain',
          footer: 'table__footer--variant_plain',
          header: 'table__header--variant_plain',
          root: 'table__root--variant_plain',
          body: 'table__body--variant_plain',
          cell: 'table__cell--variant_plain',
          head: 'table__head--variant_plain',
          row: 'table__row--variant_plain',
        },
      },
      size: {
        sm: {
          caption: 'table__caption--size_sm',
          footer: 'table__footer--size_sm',
          header: 'table__header--size_sm',
          root: 'table__root--size_sm',
          body: 'table__body--size_sm',
          cell: 'table__cell--size_sm',
          head: 'table__head--size_sm',
          row: 'table__row--size_sm',
        },
        md: {
          caption: 'table__caption--size_md',
          footer: 'table__footer--size_md',
          header: 'table__header--size_md',
          root: 'table__root--size_md',
          body: 'table__body--size_md',
          cell: 'table__cell--size_md',
          head: 'table__head--size_md',
          row: 'table__row--size_md',
        },
      },
    },
    slots: {
      caption: 'table__caption',
      footer: 'table__footer',
      header: 'table__header',
      root: 'table__root',
      body: 'table__body',
      cell: 'table__cell',
      head: 'table__head',
      row: 'table__row',
    },
    defaultVariants: { variant: 'plain', size: 'md' },
    base: 'table',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ark.table, 'root')
export const Body = withContext(ark.tbody, 'body')
export const Caption = withContext(ark.caption, 'caption')
export const Cell = withContext(ark.td, 'cell')
export const Footer = withContext(ark.tfoot, 'footer')
export const Head = withContext(ark.thead, 'head')
export const Header = withContext(ark.th, 'header')
export const Row = withContext(ark.tr, 'row')

export type RootProps = ComponentProps<typeof Root>
export type BodyProps = {} & ComponentProps<typeof Body>
export type CaptionProps = {} & ComponentProps<typeof Caption>
export type CellProps = {} & ComponentProps<typeof Cell>
export type FooterProps = {} & ComponentProps<typeof Footer>
export type HeadProps = {} & ComponentProps<typeof Head>
export type HeaderProps = {} & ComponentProps<typeof Header>
export type RowProps = {} & ComponentProps<typeof Row>

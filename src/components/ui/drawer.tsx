import type { ComponentProps } from 'solid-js'

import { Dialog as ArkDrawer, ark } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    variants: {
      variant: {
        right: {
          closeTrigger: 'drawer__closeTrigger--variant_right',
          description: 'drawer__description--variant_right',
          positioner: 'drawer__positioner--variant_right',
          backdrop: 'drawer__backdrop--variant_right',
          trigger: 'drawer__trigger--variant_right',
          content: 'drawer__content--variant_right',
          header: 'drawer__header--variant_right',
          footer: 'drawer__footer--variant_right',
          title: 'drawer__title--variant_right',
          body: 'drawer__body--variant_right',
        },
        left: {
          closeTrigger: 'drawer__closeTrigger--variant_left',
          description: 'drawer__description--variant_left',
          positioner: 'drawer__positioner--variant_left',
          backdrop: 'drawer__backdrop--variant_left',
          trigger: 'drawer__trigger--variant_left',
          content: 'drawer__content--variant_left',
          header: 'drawer__header--variant_left',
          footer: 'drawer__footer--variant_left',
          title: 'drawer__title--variant_left',
          body: 'drawer__body--variant_left',
        },
      },
    },
    slots: {
      closeTrigger: 'drawer__closeTrigger',
      description: 'drawer__description',
      positioner: 'drawer__positioner',
      backdrop: 'drawer__backdrop',
      trigger: 'drawer__trigger',
      content: 'drawer__content',
      header: 'drawer__header',
      footer: 'drawer__footer',
      title: 'drawer__title',
      body: 'drawer__body',
    },
    defaultVariants: { variant: 'right' },
    base: 'drawer',
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ArkDrawer.Root)
export const Backdrop = withContext(ArkDrawer.Backdrop, 'backdrop')
export const Body = withContext(ark.div, 'body')
export const CloseTrigger = withContext(ArkDrawer.CloseTrigger, 'closeTrigger')
export const Content = withContext(ArkDrawer.Content, 'content')
export const Description = withContext(ArkDrawer.Description, 'description')
export const Footer = withContext(ark.div, 'footer')
export const Header = withContext(ark.div, 'header')
export const Positioner = withContext(ArkDrawer.Positioner, 'positioner')
export const Title = withContext(ArkDrawer.Title, 'title')
export const Trigger = withContext(ArkDrawer.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type BackdropProps = {} & ComponentProps<typeof Backdrop>
export type BodyProps = {} & ComponentProps<typeof Body>
export type CloseTriggerProps = {} & ComponentProps<typeof CloseTrigger>
export type ContentProps = {} & ComponentProps<typeof Content>
export type DescriptionProps = {} & ComponentProps<typeof Description>
export type FooterProps = {} & ComponentProps<typeof Footer>
export type HeaderProps = {} & ComponentProps<typeof Header>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type TitleProps = {} & ComponentProps<typeof Title>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

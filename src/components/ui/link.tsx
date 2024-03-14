import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type LinkProps = {} & LinkVariantProps & HTMLArkProps<'a'>

export const Link = (props: LinkProps) => {
  const [variantProps, linkProps] = splitProps(props, ['class'])
  return <ark.a class={styles(variantProps)} {...linkProps} />
}

type LinkVariantProps = VariantProps<typeof styles>

const styles = tv({ base: 'link', variants: {} }, { twMerge: false })

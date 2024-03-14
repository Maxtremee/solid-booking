import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type KbdProps = {} & KbdVariantProps & HTMLArkProps<'kbd'>

export const Kbd = (props: KbdProps) => {
  const [variantProps, kbdProps] = splitProps(props, ['class', 'size'])
  return <ark.kbd class={styles(variantProps)} {...kbdProps} />
}

type KbdVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: { size: { sm: 'kbd--size_sm', md: 'kbd--size_md', lg: 'kbd--size_lg' } },
    defaultVariants: { size: 'md' },
    base: 'kbd',
  },
  { twMerge: false },
)

import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type BadgeProps = {} & HTMLArkProps<'div'> & BadgeVariantProps

export const Badge = (props: BadgeProps) => {
  const [variantProps, buttonProps] = splitProps(props, ['class', 'size', 'variant'])
  return <ark.div class={styles(variantProps)} {...buttonProps} />
}

type BadgeVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      variant: {
        outline: 'badge--variant_outline',
        subtle: 'badge--variant_subtle',
        solid: 'badge--variant_solid',
      },
      size: { sm: 'badge--size_sm', md: 'badge--size_md', lg: 'badge--size_lg' },
    },
    defaultVariants: { variant: 'subtle', size: 'md' },
    base: 'badge',
  },
  { twMerge: false },
)

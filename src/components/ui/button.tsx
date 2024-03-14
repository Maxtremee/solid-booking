import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type ButtonProps = {} & ButtonVariantProps & HTMLArkProps<'button'>

export const Button = (props: ButtonProps) => {
  const [variantProps, buttonProps] = splitProps(props, ['class', 'size', 'variant'])
  return <ark.button class={styles(variantProps)} {...buttonProps} />
}

type ButtonVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      variant: {
        outline: 'button--variant_outline',
        subtle: 'button--variant_subtle',
        solid: 'button--variant_solid',
        ghost: 'button--variant_ghost',
        link: 'button--variant_link',
      },
      size: {
        '2xl': 'button--size_2xl',
        xs: 'button--size_xs',
        sm: 'button--size_sm',
        md: 'button--size_md',
        lg: 'button--size_lg',
        xl: 'button--size_xl',
      },
    },
    defaultVariants: { variant: 'solid', size: 'md' },
    base: 'button',
  },
  { twMerge: false },
)

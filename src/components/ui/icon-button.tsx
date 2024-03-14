import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type IconButtonProps = {} & IconButtonVariantProps & HTMLArkProps<'button'>

export const IconButton = (props: IconButtonProps) => {
  const [variantProps, iconButtonProps] = splitProps(props, ['class', 'size', 'variant'])
  return <ark.button class={styles(variantProps)} {...iconButtonProps} />
}

type IconButtonVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      variant: {
        outline: 'iconButton--variant_outline',
        subtle: 'iconButton--variant_subtle',
        solid: 'iconButton--variant_solid',
        ghost: 'iconButton--variant_ghost',
        link: 'iconButton--variant_link',
      },
      size: {
        '2xl': 'iconButton--size_2xl',
        xs: 'iconButton--size_xs',
        sm: 'iconButton--size_sm',
        md: 'iconButton--size_md',
        lg: 'iconButton--size_lg',
        xl: 'iconButton--size_xl',
      },
    },
    defaultVariants: { variant: 'solid', size: 'md' },
    base: 'iconButton',
  },
  { twMerge: false },
)

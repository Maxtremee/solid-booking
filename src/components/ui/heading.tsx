import { mergeProps, splitProps, type JSX } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'
import { Dynamic } from 'solid-js/web'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
} & TextVariantProps &
  JSX.IntrinsicElements[As]

export const Heading = (props: HeadingProps) => {
  const mergedProps = mergeProps({ variant: 'heading', as: 'h2' }, props)
  const [variantProps, headingProps] = splitProps(mergedProps, ['size', 'class', 'variant'])
  const [localProps, rootProps] = splitProps(headingProps, ['as'])
  const className = styles({ variant: 'heading', size: 'sm' })
  console.log(className)

  return <Dynamic component={localProps.as} class={className} {...rootProps} />
}

type TextVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        '2xl': 'text--size_2xl',
        '3xl': 'text--size_3xl',
        '4xl': 'text--size_4xl',
        '5xl': 'text--size_5xl',
        '6xl': 'text--size_6xl',
        '7xl': 'text--size_7xl',
        xs: 'text--size_xs',
        sm: 'text--size_sm',
        md: 'text--size_md',
        lg: 'text--size_lg',
        xl: 'text--size_xl',
      },
      variant: { heading: 'text--variant_heading' },
    },
    base: 'text',
  },
  { twMerge: false },
)

import type { HTMLArkProps } from '@ark-ui/solid'

import { type VariantProps, tv } from 'tailwind-variants'
import { Dynamic } from 'solid-js/web'
import { splitProps } from 'solid-js'

export type IconProps = {} & IconVariantProps & HTMLArkProps<'svg'>

export const Icon = (props: IconProps) => {
  const [variantProps, iconProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(iconProps, ['as'])
  const className = styles(variantProps)

  return <Dynamic component={localProps.as} class={className} {...rootProps} />
}

type IconVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        '2xl': 'icon--size_2xl',
        xs: 'icon--size_xs',
        sm: 'icon--size_sm',
        md: 'icon--size_md',
        lg: 'icon--size_lg',
        xl: 'icon--size_xl',
      },
    },
    defaultVariants: { size: 'md' },
    base: 'icon',
  },
  { twMerge: false },
)

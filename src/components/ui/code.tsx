import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type CodeProps = {} & CodeVariantProps & HTMLArkProps<'code'>

export const Code = (props: CodeProps) => {
  const [variantProps, codeProps] = splitProps(props, ['class', 'size'])
  return <ark.code class={styles(variantProps)} {...codeProps} />
}

type CodeVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      variant: { outline: 'code--variant_outline', ghost: 'code--variant_ghost' },
      size: { sm: 'code--size_sm', md: 'code--size_md', lg: 'code--size_lg' },
    },
    defaultVariants: { variant: 'outline', size: 'md' },
    base: 'code',
  },
  { twMerge: false },
)

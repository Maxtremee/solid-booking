import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type TextareaProps = {} & TextareaVariantProps & HTMLArkProps<'textarea'>

export const Textarea = (props: TextareaProps) => {
  const [variantProps, textareaProps] = splitProps(props, ['class', 'size'])
  return <ark.textarea class={styles(variantProps)} {...textareaProps} />
}

type TextareaVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: 'textarea--size_sm',
        md: 'textarea--size_md',
        lg: 'textarea--size_lg',
        xl: 'textarea--size_xl',
      },
    },
    defaultVariants: { size: 'md' },
    base: 'textarea',
  },
  { twMerge: false },
)

import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'

export type FormLabelProps = {} & FormLabelVariantProps & HTMLArkProps<'label'>

export const FormLabel = (props: FormLabelProps) => {
  const [variantProps, formLabelProps] = splitProps(props, ['class', 'size'])
  return <ark.label class={styles(variantProps)} {...formLabelProps} />
}

type FormLabelVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: 'formLabel--size_sm',
        md: 'formLabel--size_md',
        lg: 'formLabel--size_lg',
        xl: 'formLabel--size_xl',
      },
    },
    defaultVariants: { size: 'md' },
    base: 'formLabel',
  },
  { twMerge: false },
)

import { type CheckboxRootProps as ArkCheckboxProps, Checkbox as ArkCheckbox } from '@ark-ui/solid'
import { splitProps, type JSX, children, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export type CheckboxProps = {
  children?: JSX.Element
} & ArkCheckboxProps & CheckboxVariantProps

export const Checkbox = (props: CheckboxProps) => {
  const [variantProps, avatarProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(avatarProps, ['children'])
  const { control, label, root } = styles(variantProps)
  const getChildren = children(() => localProps.children)

  return (
    <ArkCheckbox.Root class={root()} {...rootProps}>
      {(state) => (
        <>
          <ArkCheckbox.Control class={control()}>
            <Show when={state().isChecked}>
              <CheckIcon />
            </Show>
            <Show when={state().isIndeterminate}>
              <MinusIcon />
            </Show>
          </ArkCheckbox.Control>
          <Show when={getChildren()}>
            <ArkCheckbox.Label class={label()}>{getChildren()}</ArkCheckbox.Label>
          </Show>
        </>
      )}
    </ArkCheckbox.Root>
  )
}

type CheckboxVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          indicator: 'checkbox__indicator--size_sm',
          control: 'checkbox__control--size_sm',
          label: 'checkbox__label--size_sm',
          root: 'checkbox__root--size_sm',
        },
        md: {
          indicator: 'checkbox__indicator--size_md',
          control: 'checkbox__control--size_md',
          label: 'checkbox__label--size_md',
          root: 'checkbox__root--size_md',
        },
        lg: {
          indicator: 'checkbox__indicator--size_lg',
          control: 'checkbox__control--size_lg',
          label: 'checkbox__label--size_lg',
          root: 'checkbox__root--size_lg',
        },
      },
    },
    slots: {
      indicator: 'checkbox__indicator',
      control: 'checkbox__control',
      label: 'checkbox__label',
      root: 'checkbox__root',
    },
    defaultVariants: { size: 'md' },
    base: 'checkbox',
  },
  { twMerge: false },
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
    <title>Check</title>
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
)

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
    <title>Minus</title>
    <path
      stroke-linejoin="round"
      d="M2.91675 7H11.0834"
      stroke-linecap="round"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
)

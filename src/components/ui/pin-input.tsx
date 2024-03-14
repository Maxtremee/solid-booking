import { PinInput as ArkPinInput, type PinInputRootProps } from '@ark-ui/solid'
import { splitProps, type JSX, children, Index, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

import { Input } from '~/components/ui/input'

export type PinInputProps = {
  children?: JSX.Element
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
} & PinInputRootProps & PinInputVariantProps

export const PinInput = (props: PinInputProps) => {
  const [variantProps, pinInputProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(pinInputProps, ['children', 'length'])
  const getChildren = children(() => localProps.children)
  const { control, label, input, root } = styles(variantProps)

  return (
    <ArkPinInput.Root class={root()} {...rootProps}>
      <Show when={getChildren()}>
        <ArkPinInput.Label class={label()}>{getChildren()}</ArkPinInput.Label>
      </Show>
      <ArkPinInput.Control class={control()}>
        <Index each={Array.from({ length: localProps.length ?? 4 }, (_, index) => index)}>
          {(index) => (
            <ArkPinInput.Input
              size={variantProps.size}
              class={input()}
              index={index()}
              as={Input}
            />
          )}
        </Index>
      </ArkPinInput.Control>
    </ArkPinInput.Root>
  )
}

type PinInputVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        '2xl': {
          control: 'pinInput__control--size_2xl',
          label: 'pinInput__label--size_2xl',
          input: 'pinInput__input--size_2xl',
          root: 'pinInput__root--size_2xl',
        },
        xs: {
          control: 'pinInput__control--size_xs',
          label: 'pinInput__label--size_xs',
          input: 'pinInput__input--size_xs',
          root: 'pinInput__root--size_xs',
        },
        sm: {
          control: 'pinInput__control--size_sm',
          label: 'pinInput__label--size_sm',
          input: 'pinInput__input--size_sm',
          root: 'pinInput__root--size_sm',
        },
        md: {
          control: 'pinInput__control--size_md',
          label: 'pinInput__label--size_md',
          input: 'pinInput__input--size_md',
          root: 'pinInput__root--size_md',
        },
        lg: {
          control: 'pinInput__control--size_lg',
          label: 'pinInput__label--size_lg',
          input: 'pinInput__input--size_lg',
          root: 'pinInput__root--size_lg',
        },
        xl: {
          control: 'pinInput__control--size_xl',
          label: 'pinInput__label--size_xl',
          input: 'pinInput__input--size_xl',
          root: 'pinInput__root--size_xl',
        },
      },
    },
    slots: {
      control: 'pinInput__control',
      label: 'pinInput__label',
      input: 'pinInput__input',
      root: 'pinInput__root',
    },
    defaultVariants: { size: 'md' },
    base: 'pinInput',
  },
  { twMerge: false },
)

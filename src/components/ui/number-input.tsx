import { NumberInput as ArkNumberInput, type NumberInputRootProps } from '@ark-ui/solid'
import { splitProps, type JSX, children, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export type NumberInputProps = {
  children?: JSX.Element
} & Omit<NumberInputRootProps, 'children'> & NumberInputVariantProps

export const NumberInput = (props: NumberInputProps) => {
  const [variantProps, numberInputProps] = splitProps(props, ['size', 'class'])
  const { incrementTrigger, decrementTrigger, control, label, input, root } = styles(variantProps)
  const getChildren = children(() => numberInputProps.children)

  return (
    <ArkNumberInput.Root class={root()} {...numberInputProps}>
      <Show when={getChildren()}>
        <ArkNumberInput.Label class={label()}>{getChildren()}</ArkNumberInput.Label>
      </Show>
      <ArkNumberInput.Control class={control()}>
        <ArkNumberInput.Input class={input()} />
        <ArkNumberInput.IncrementTrigger class={incrementTrigger()}>
          <ChevronUpIcon />
        </ArkNumberInput.IncrementTrigger>
        <ArkNumberInput.DecrementTrigger class={decrementTrigger()}>
          <ChevronDownIcon />
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  )
}

type NumberInputVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        md: {
          incrementTrigger: 'numberInput__incrementTrigger--size_md',
          decrementTrigger: 'numberInput__decrementTrigger--size_md',
          scrubber: 'numberInput__scrubber--size_md',
          control: 'numberInput__control--size_md',
          label: 'numberInput__label--size_md',
          input: 'numberInput__input--size_md',
          root: 'numberInput__root--size_md',
        },
        lg: {
          incrementTrigger: 'numberInput__incrementTrigger--size_lg',
          decrementTrigger: 'numberInput__decrementTrigger--size_lg',
          scrubber: 'numberInput__scrubber--size_lg',
          control: 'numberInput__control--size_lg',
          label: 'numberInput__label--size_lg',
          input: 'numberInput__input--size_lg',
          root: 'numberInput__root--size_lg',
        },
        xl: {
          incrementTrigger: 'numberInput__incrementTrigger--size_xl',
          decrementTrigger: 'numberInput__decrementTrigger--size_xl',
          scrubber: 'numberInput__scrubber--size_xl',
          control: 'numberInput__control--size_xl',
          label: 'numberInput__label--size_xl',
          input: 'numberInput__input--size_xl',
          root: 'numberInput__root--size_xl',
        },
      },
    },
    slots: {
      incrementTrigger: 'numberInput__incrementTrigger',
      decrementTrigger: 'numberInput__decrementTrigger',
      scrubber: 'numberInput__scrubber',
      control: 'numberInput__control',
      label: 'numberInput__label',
      input: 'numberInput__input',
      root: 'numberInput__root',
    },
    defaultVariants: { size: 'md' },
    base: 'numberInput',
  },
  { twMerge: false },
)

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Up</title>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
      d="m18 15l-6-6l-6 6"
      stroke-width="2"
      fill="none"
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Down</title>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
      stroke-width="2"
      d="m6 9l6 6l6-6"
      fill="none"
    />
  </svg>
)

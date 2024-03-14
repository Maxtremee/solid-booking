import { type SwitchRootProps, Switch as ArkSwitch } from '@ark-ui/solid'
import { splitProps, type JSX, children, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export type SwitchProps = {
  children?: JSX.Element
} & SwitchRootProps & SwitchVariantProps

export const Switch = (props: SwitchProps) => {
  const [variantProps, switchProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(switchProps, ['children'])
  const getChildren = children(() => localProps.children)
  const { control, label, thumb, root } = styles(variantProps)

  return (
    <ArkSwitch.Root class={root()} {...rootProps}>
      <ArkSwitch.Control class={control()}>
        <ArkSwitch.Thumb class={thumb()} />
      </ArkSwitch.Control>
      <Show when={getChildren()}>
        <ArkSwitch.Label class={label()}>{getChildren()}</ArkSwitch.Label>
      </Show>
    </ArkSwitch.Root>
  )
}

type SwitchVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          control: 'switchRecipe__control--size_sm',
          label: 'switchRecipe__label--size_sm',
          thumb: 'switchRecipe__thumb--size_sm',
          root: 'switchRecipe__root--size_sm',
        },
        md: {
          control: 'switchRecipe__control--size_md',
          label: 'switchRecipe__label--size_md',
          thumb: 'switchRecipe__thumb--size_md',
          root: 'switchRecipe__root--size_md',
        },
        lg: {
          control: 'switchRecipe__control--size_lg',
          label: 'switchRecipe__label--size_lg',
          thumb: 'switchRecipe__thumb--size_lg',
          root: 'switchRecipe__root--size_lg',
        },
      },
    },
    slots: {
      control: 'switchRecipe__control',
      label: 'switchRecipe__label',
      thumb: 'switchRecipe__thumb',
      root: 'switchRecipe__root',
    },
    defaultVariants: { size: 'md' },
    base: 'switchRecipe',
  },
  { twMerge: false },
)

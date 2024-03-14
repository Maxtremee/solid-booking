import { type SliderRootProps, Slider as ArkSlider } from '@ark-ui/solid'
import { splitProps, type JSX, children, Index, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export type SliderProps = {
  marks?: {
    label?: JSX.Element
    value: number
  }[]
  children?: JSX.Element
} & SliderRootProps & SliderVariantProps

export const Slider = (props: SliderProps) => {
  const [variantProps, sliderProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(sliderProps, ['marks', 'children'])
  const getChildren = children(() => localProps.children)
  const { markerGroup, control, marker, label, range, thumb, track, root } = styles(variantProps)

  return (
    <ArkSlider.Root class={root()} {...rootProps}>
      {(api) => (
        <>
          <Show when={getChildren()}>
            <ArkSlider.Label class={label()}>{getChildren()}</ArkSlider.Label>
          </Show>
          <ArkSlider.Control class={control()}>
            <ArkSlider.Track class={track()}>
              <ArkSlider.Range class={range()} />
            </ArkSlider.Track>
            <Index each={api().value}>
              {(_, index) => <ArkSlider.Thumb class={thumb()} index={index} />}
            </Index>
          </ArkSlider.Control>
          <Show when={localProps.marks}>
            <ArkSlider.MarkerGroup class={markerGroup()}>
              <Index each={localProps.marks}>
                {(mark) => (
                  <ArkSlider.Marker value={mark().value} class={marker()}>
                    {mark().label}
                  </ArkSlider.Marker>
                )}
              </Index>
            </ArkSlider.MarkerGroup>
          </Show>
        </>
      )}
    </ArkSlider.Root>
  )
}

type SliderVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          markerGroup: 'slider__markerGroup--size_sm',
          valueText: 'slider__valueText--size_sm',
          control: 'slider__control--size_sm',
          marker: 'slider__marker--size_sm',
          label: 'slider__label--size_sm',
          thumb: 'slider__thumb--size_sm',
          track: 'slider__track--size_sm',
          range: 'slider__range--size_sm',
          root: 'slider__root--size_sm',
        },
        md: {
          markerGroup: 'slider__markerGroup--size_md',
          valueText: 'slider__valueText--size_md',
          control: 'slider__control--size_md',
          marker: 'slider__marker--size_md',
          label: 'slider__label--size_md',
          thumb: 'slider__thumb--size_md',
          track: 'slider__track--size_md',
          range: 'slider__range--size_md',
          root: 'slider__root--size_md',
        },
        lg: {
          markerGroup: 'slider__markerGroup--size_lg',
          valueText: 'slider__valueText--size_lg',
          control: 'slider__control--size_lg',
          marker: 'slider__marker--size_lg',
          label: 'slider__label--size_lg',
          thumb: 'slider__thumb--size_lg',
          track: 'slider__track--size_lg',
          range: 'slider__range--size_lg',
          root: 'slider__root--size_lg',
        },
      },
    },
    slots: {
      markerGroup: 'slider__markerGroup',
      valueText: 'slider__valueText',
      control: 'slider__control',
      marker: 'slider__marker',
      label: 'slider__label',
      thumb: 'slider__thumb',
      track: 'slider__track',
      range: 'slider__range',
      root: 'slider__root',
    },
    defaultVariants: { size: 'md' },
    base: 'slider',
  },
  { twMerge: false },
)

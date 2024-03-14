import { Progress as ArkProgress, type ProgressRootProps } from '@ark-ui/solid'
import { splitProps, type JSX, children, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export type ProgressProps = {
  /**
   * The type of progress to render.
   * @default linear
   */
  type?: 'circular' | 'linear'
  children?: JSX.Element
} & ProgressRootProps & ProgressVariantProps

export const Progress = (props: ProgressProps) => {
  const [variantProps, progressProps] = splitProps(props, ['class', 'size'])
  const [localProps, rootProps] = splitProps(progressProps, ['children', 'type'])
  const getChildren = children(() => localProps.children)
  const { circleRange, circleTrack, valueText, circle, label, track, range, root } =
    styles(variantProps)

  return (
    <ArkProgress.Root class={root({ class: variantProps.class })} {...rootProps}>
      <Show when={getChildren()}>
        <ArkProgress.Label class={label()}>{getChildren()}</ArkProgress.Label>
      </Show>
      <Show
        fallback={
          <ArkProgress.Track class={track()}>
            <ArkProgress.Range class={range()} />
          </ArkProgress.Track>
        }
        when={localProps.type === 'circular'}
      >
        <ArkProgress.Circle class={circle()}>
          <ArkProgress.CircleTrack class={circleTrack()} />
          <ArkProgress.CircleRange class={circleRange()} />
          <ArkProgress.ValueText class={valueText()} />
        </ArkProgress.Circle>
      </Show>
      <ArkProgress.ValueText class={valueText()} />
    </ArkProgress.Root>
  )
}

type ProgressVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          circleTrack: 'progress__circleTrack--size_sm',
          circleRange: 'progress__circleRange--size_sm',
          valueText: 'progress__valueText--size_sm',
          circle: 'progress__circle--size_sm',
          label: 'progress__label--size_sm',
          track: 'progress__track--size_sm',
          range: 'progress__range--size_sm',
          root: 'progress__root--size_sm',
          view: 'progress__view--size_sm',
        },
        md: {
          circleTrack: 'progress__circleTrack--size_md',
          circleRange: 'progress__circleRange--size_md',
          valueText: 'progress__valueText--size_md',
          circle: 'progress__circle--size_md',
          label: 'progress__label--size_md',
          track: 'progress__track--size_md',
          range: 'progress__range--size_md',
          root: 'progress__root--size_md',
          view: 'progress__view--size_md',
        },
        lg: {
          circleTrack: 'progress__circleTrack--size_lg',
          circleRange: 'progress__circleRange--size_lg',
          valueText: 'progress__valueText--size_lg',
          circle: 'progress__circle--size_lg',
          label: 'progress__label--size_lg',
          track: 'progress__track--size_lg',
          range: 'progress__range--size_lg',
          root: 'progress__root--size_lg',
          view: 'progress__view--size_lg',
        },
      },
    },
    slots: {
      circleTrack: 'progress__circleTrack',
      circleRange: 'progress__circleRange',
      valueText: 'progress__valueText',
      circle: 'progress__circle',
      label: 'progress__label',
      track: 'progress__track',
      range: 'progress__range',
      root: 'progress__root',
      view: 'progress__view',
    },
    defaultVariants: { size: 'md' },
    base: 'progress',
  },
  { twMerge: false },
)

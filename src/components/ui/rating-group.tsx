import { RatingGroup as ArkRatingGroup, type RatingGroupRootProps } from '@ark-ui/solid'
import { splitProps, type JSX, children, Index, Show } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export type RatingGroupProps = {
  children?: JSX.Element
} & RatingGroupRootProps & RatingGroupVariantProps

export const RatingGroup = (props: RatingGroupProps) => {
  const [variantProps, ratingGroupProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(ratingGroupProps, ['children'])
  const getChildren = children(() => localProps.children)
  const { control, label, root, item } = styles(variantProps)

  return (
    <ArkRatingGroup.Root class={root()} {...rootProps}>
      <Show when={getChildren()}>
        <ArkRatingGroup.Label class={label()}>{getChildren()}</ArkRatingGroup.Label>
      </Show>
      <ArkRatingGroup.Control class={control()}>
        {(api) => (
          <Index each={api().items}>
            {(index) => (
              <ArkRatingGroup.Item index={index()} class={item()}>
                {(api) => <StarIcon isHalf={api().isHalf} />}
              </ArkRatingGroup.Item>
            )}
          </Index>
        )}
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  )
}

type RatingGroupVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        sm: {
          control: 'ratingGroup__control--size_sm',
          label: 'ratingGroup__label--size_sm',
          root: 'ratingGroup__root--size_sm',
          item: 'ratingGroup__item--size_sm',
        },
        md: {
          control: 'ratingGroup__control--size_md',
          label: 'ratingGroup__label--size_md',
          root: 'ratingGroup__root--size_md',
          item: 'ratingGroup__item--size_md',
        },
        lg: {
          control: 'ratingGroup__control--size_lg',
          label: 'ratingGroup__label--size_lg',
          root: 'ratingGroup__root--size_lg',
          item: 'ratingGroup__item--size_lg',
        },
      },
    },
    slots: {
      control: 'ratingGroup__control',
      label: 'ratingGroup__label',
      root: 'ratingGroup__root',
      item: 'ratingGroup__item',
    },
    defaultVariants: { size: 'md' },
    base: 'ratingGroup',
  },
  { twMerge: false },
)

type Props = {
  isHalf: boolean
}

const StarIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke-linejoin="round"
    stroke-linecap="round"
    viewBox="0 0 24 24"
    stroke="inherit"
    stroke-width="2"
    fill="inherit"
    height="24"
    width="24"
  >
    <title>Star</title>
    <defs>
      <linearGradient id="half">
        <stop stop-color="var(--colors-color-palette-default)" offset="50%" />
        <stop stop-color="var(--colors-bg-emphasized)" offset="50%" />
      </linearGradient>
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill={props.isHalf ? 'url(#half)' : 'inherit'}
    />
  </svg>
)

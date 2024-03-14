import { type VariantProps, tv } from 'tailwind-variants'
import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps, type JSX, Show } from 'solid-js'

export type SkeletonProps = {
  children?: JSX.Element
  /**
   * @default false
   */
  isLoaded?: boolean
} & HTMLArkProps<'div'> & SkeletonVariantProps

export const Skeleton = (props: SkeletonProps) => {
  const [localProps, skeletonProps] = splitProps(props, ['class', 'isLoaded'])

  return (
    <Show
      fallback={<ark.div class={styles({ class: localProps.class })} {...skeletonProps} />}
      when={localProps.isLoaded}
    >
      <ark.div class="animate-fade-in" {...skeletonProps} />
    </Show>
  )
}

type SkeletonVariantProps = VariantProps<typeof styles>

const styles = tv({ base: 'skeleton', variants: {} }, { twMerge: false })

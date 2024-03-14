import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { splitProps, For } from 'solid-js'

import { IconButton } from '~/components/ui/icon-button'
import { Button } from '~/components/ui/button'

export type PaginationProps = {} & PaginationRootProps & PaginationVariantProps

export const Pagination = (props: PaginationProps) => {
  const [variantProps, rootProps] = splitProps(props, ['class'])
  const { prevTrigger, nextTrigger, ellipsis, root, item } = styles(variantProps)

  return (
    <ArkPagination.Root class={root()} {...rootProps}>
      {(api) => (
        <>
          <ArkPagination.PrevTrigger class={prevTrigger()}>
            <IconButton aria-label="Next Page" variant="ghost">
              <ChevronLeftIcon />
            </IconButton>
          </ArkPagination.PrevTrigger>
          <For each={api().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <ArkPagination.Item {...page} variant="outline" class={item()} as={Button}>
                  {page.value}
                </ArkPagination.Item>
              ) : (
                <ArkPagination.Ellipsis class={ellipsis()} index={index()}>
                  &#8230;
                </ArkPagination.Ellipsis>
              )
            }
          </For>
          <ArkPagination.NextTrigger class={nextTrigger()}>
            <IconButton aria-label="Next Page" variant="ghost">
              <ChevronRightIcon />
            </IconButton>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  )
}

type PaginationVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    slots: {
      prevTrigger: 'pagination__prevTrigger',
      nextTrigger: 'pagination__nextTrigger',
      ellipsis: 'pagination__ellipsis',
      root: 'pagination__root',
      item: 'pagination__item',
    },
    base: 'pagination',
    variants: {},
  },
  { twMerge: false },
)

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Left</title>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
      d="m15 18l-6-6l6-6"
      stroke-width="2"
      fill="none"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Right</title>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
      d="m9 18l6-6l-6-6"
      stroke-width="2"
      fill="none"
    />
  </svg>
)

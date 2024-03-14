import type { ComponentProps } from 'solid-js'

import { Splitter } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      resizeTrigger: 'splitter__resizeTrigger',
      panel: 'splitter__panel',
      root: 'splitter__root',
    },
    base: 'splitter',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Splitter.Root, 'root')
export const Panel = withContext(Splitter.Panel, 'panel')
export const ResizeTrigger = withContext(Splitter.ResizeTrigger, 'resizeTrigger')

export type RootProps = ComponentProps<typeof Root>
export type PanelProps = {} & ComponentProps<typeof Panel>
export type ResizeTriggerProps = {} & ComponentProps<typeof ResizeTrigger>

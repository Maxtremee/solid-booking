import type { ComponentProps } from 'solid-js'

import { Editable } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      submitTrigger: 'editable__submitTrigger',
      cancelTrigger: 'editable__cancelTrigger',
      editTrigger: 'editable__editTrigger',
      preview: 'editable__preview',
      control: 'editable__control',
      label: 'editable__label',
      input: 'editable__input',
      root: 'editable__root',
      area: 'editable__area',
    },
    base: 'editable',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Editable.Root, 'root')
export const Area = withContext(Editable.Area, 'area')
export const CancelTrigger = withContext(Editable.CancelTrigger, 'cancelTrigger')
export const Control = withContext(Editable.Control, 'control')
export const EditTrigger = withContext(Editable.EditTrigger, 'editTrigger')
export const Input = withContext(Editable.Input, 'input')
export const Label = withContext(Editable.Label, 'label')
export const Preview = withContext(Editable.Preview, 'preview')
export const SubmitTrigger = withContext(Editable.SubmitTrigger, 'submitTrigger')

export type RootProps = ComponentProps<typeof Root>
export type AreaProps = {} & ComponentProps<typeof Area>
export type CancelTriggerProps = {} & ComponentProps<typeof CancelTrigger>
export type ControlProps = {} & ComponentProps<typeof Control>
export type EditTriggerProps = {} & ComponentProps<typeof EditTrigger>
export type InputProps = {} & ComponentProps<typeof Input>
export type LabelProps = {} & ComponentProps<typeof Label>
export type PreviewProps = {} & ComponentProps<typeof Preview>
export type SubmitTriggerProps = {} & ComponentProps<typeof SubmitTrigger>

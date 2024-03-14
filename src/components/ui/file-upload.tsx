import type { ComponentProps } from 'solid-js'

import { FileUpload } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      itemDeleteTrigger: 'fileUpload__itemDeleteTrigger',
      itemPreviewImage: 'fileUpload__itemPreviewImage',
      itemSizeText: 'fileUpload__itemSizeText',
      itemPreview: 'fileUpload__itemPreview',
      itemGroup: 'fileUpload__itemGroup',
      dropzone: 'fileUpload__dropzone',
      itemName: 'fileUpload__itemName',
      trigger: 'fileUpload__trigger',
      label: 'fileUpload__label',
      root: 'fileUpload__root',
      item: 'fileUpload__item',
    },
    base: 'fileUpload',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(FileUpload.Root, 'root')
export const Dropzone = withContext(FileUpload.Dropzone, 'dropzone')
export const Item = withContext(FileUpload.Item, 'item')
export const ItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')
export const ItemGroup = withContext(FileUpload.ItemGroup, 'itemGroup')
export const ItemName = withContext(FileUpload.ItemName, 'itemName')
export const ItemPreview = withContext(FileUpload.ItemPreview, 'itemPreview')
export const ItemPreviewImage = withContext(FileUpload.ItemPreviewImage, 'itemPreviewImage')
export const ItemSizeText = withContext(FileUpload.ItemSizeText, 'itemSizeText')
export const Label = withContext(FileUpload.Label, 'label')
export const Trigger = withContext(FileUpload.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type DropzoneProps = {} & ComponentProps<typeof Dropzone>
export type ItemProps = {} & ComponentProps<typeof Item>
export type ItemDeleteTriggerProps = {} & ComponentProps<typeof ItemDeleteTrigger>
export type ItemGroupProps = {} & ComponentProps<typeof ItemGroup>
export type ItemNameProps = {} & ComponentProps<typeof ItemName>
export type ItemPreviewProps = {} & ComponentProps<typeof ItemPreview>
export type ItemPreviewImageProps = {} & ComponentProps<typeof ItemPreviewImage>
export type ItemSizeTextProps = {} & ComponentProps<typeof ItemSizeText>
export type LabelProps = {} & ComponentProps<typeof Label>
export type TriggerProps = {} & ComponentProps<typeof Trigger>

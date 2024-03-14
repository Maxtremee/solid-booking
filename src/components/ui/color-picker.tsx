import type { ComponentProps } from 'solid-js'

import { ColorPicker } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      channelSliderTrack: 'colorPicker__channelSliderTrack',
      channelSliderThumb: 'colorPicker__channelSliderThumb',
      eyeDropperTrigger: 'colorPicker__eyeDropperTrigger',
      transparencyGrid: 'colorPicker__transparencyGrid',
      swatchIndicator: 'colorPicker__swatchIndicator',
      areaBackground: 'colorPicker__areaBackground',
      channelSlider: 'colorPicker__channelSlider',
      swatchTrigger: 'colorPicker__swatchTrigger',
      formatTrigger: 'colorPicker__formatTrigger',
      channelInput: 'colorPicker__channelInput',
      formatSelect: 'colorPicker__formatSelect',
      swatchGroup: 'colorPicker__swatchGroup',
      positioner: 'colorPicker__positioner',
      areaThumb: 'colorPicker__areaThumb',
      valueText: 'colorPicker__valueText',
      control: 'colorPicker__control',
      trigger: 'colorPicker__trigger',
      content: 'colorPicker__content',
      swatch: 'colorPicker__swatch',
      label: 'colorPicker__label',
      root: 'colorPicker__root',
      area: 'colorPicker__area',
      view: 'colorPicker__view',
    },
    base: 'colorPicker',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ColorPicker.Root, 'root')
export const Area = withContext(ColorPicker.Area, 'area')
export const AreaBackground = withContext(ColorPicker.AreaBackground, 'areaBackground')
export const AreaThumb = withContext(ColorPicker.AreaThumb, 'areaThumb')
export const ChannelInput = withContext(ColorPicker.ChannelInput, 'channelInput')
export const ChannelSlider = withContext(ColorPicker.ChannelSlider, 'channelSlider')
export const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')
export const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')
export const Content = withContext(ColorPicker.Content, 'content')
export const Control = withContext(ColorPicker.Control, 'control')
export const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')
export const FormatSelect = withContext(ColorPicker.FormatSelect, 'formatSelect')
export const FormatTrigger = withContext(ColorPicker.FormatTrigger, 'formatTrigger')
export const Label = withContext(ColorPicker.Label, 'label')
export const Positioner = withContext(ColorPicker.Positioner, 'positioner')
export const Swatch = withContext(ColorPicker.Swatch, 'swatch')
export const SwatchGroup = withContext(ColorPicker.SwatchGroup, 'swatchGroup')
export const SwatchIndicator = withContext(ColorPicker.SwatchIndicator, 'swatchIndicator')
export const SwatchTrigger = withContext(ColorPicker.SwatchTrigger, 'swatchTrigger')
export const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, 'transparencyGrid')
export const Trigger = withContext(ColorPicker.Trigger, 'trigger')
export const ValueText = withContext(ColorPicker.ValueText, 'valueText')
export const View = withContext(ColorPicker.View, 'view')

export type RootProps = ComponentProps<typeof Root>
export type AreaProps = {} & ComponentProps<typeof Area>
export type AreaBackgroundProps = {} & ComponentProps<typeof AreaBackground>
export type AreaThumbProps = {} & ComponentProps<typeof AreaThumb>
export type ChannelInputProps = {} & ComponentProps<typeof ChannelInput>
export type ChannelSliderProps = {} & ComponentProps<typeof ChannelSlider>
export type ChannelSliderThumbProps = {} & ComponentProps<typeof ChannelSliderThumb>
export type ChannelSliderTrackProps = {} & ComponentProps<typeof ChannelSliderTrack>
export type ContentProps = {} & ComponentProps<typeof Content>
export type ControlProps = {} & ComponentProps<typeof Control>
export type EyeDropperTriggerProps = {} & ComponentProps<typeof EyeDropperTrigger>
export type FormatSelectProps = {} & ComponentProps<typeof FormatSelect>
export type FormatTriggerProps = {} & ComponentProps<typeof FormatTrigger>
export type LabelProps = {} & ComponentProps<typeof Label>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type SwatchProps = {} & ComponentProps<typeof Swatch>
export type SwatchGroupProps = {} & ComponentProps<typeof SwatchGroup>
export type SwatchIndicatorProps = {} & ComponentProps<typeof SwatchIndicator>
export type SwatchTriggerProps = {} & ComponentProps<typeof SwatchTrigger>
export type TransparencyGridProps = {} & ComponentProps<typeof TransparencyGrid>
export type TriggerProps = {} & ComponentProps<typeof Trigger>
export type ValueTextProps = {} & ComponentProps<typeof ValueText>
export type ViewProps = {} & ComponentProps<typeof View>

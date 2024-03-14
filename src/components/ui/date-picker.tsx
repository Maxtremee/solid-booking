import type { ComponentProps } from 'solid-js'

import { DatePicker } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'

import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    slots: {
      tableCellTrigger: 'datePicker__tableCellTrigger',
      clearTrigger: 'datePicker__clearTrigger',
      monthSelect: 'datePicker__monthSelect',
      nextTrigger: 'datePicker__nextTrigger',
      prevTrigger: 'datePicker__prevTrigger',
      tableHeader: 'datePicker__tableHeader',
      viewTrigger: 'datePicker__viewTrigger',
      viewControl: 'datePicker__viewControl',
      positioner: 'datePicker__positioner',
      yearSelect: 'datePicker__yearSelect',
      rangeText: 'datePicker__rangeText',
      tableBody: 'datePicker__tableBody',
      tableCell: 'datePicker__tableCell',
      tableHead: 'datePicker__tableHead',
      tableRow: 'datePicker__tableRow',
      content: 'datePicker__content',
      control: 'datePicker__control',
      trigger: 'datePicker__trigger',
      label: 'datePicker__label',
      input: 'datePicker__input',
      table: 'datePicker__table',
      root: 'datePicker__root',
      view: 'datePicker__view',
    },
    base: 'datePicker',
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(DatePicker.Root, 'root')
export const ClearTrigger = withContext(DatePicker.ClearTrigger, 'clearTrigger')
export const Content = withContext(DatePicker.Content, 'content')
export const Control = withContext(DatePicker.Control, 'control')
export const Input = withContext(DatePicker.Input, 'input')
export const Label = withContext(DatePicker.Label, 'label')
export const MonthSelect = withContext(DatePicker.MonthSelect, 'monthSelect')
export const NextTrigger = withContext(DatePicker.NextTrigger, 'nextTrigger')
export const Positioner = withContext(DatePicker.Positioner, 'positioner')
export const PrevTrigger = withContext(DatePicker.PrevTrigger, 'prevTrigger')
export const RangeText = withContext(DatePicker.RangeText, 'rangeText')
export const Table = withContext(DatePicker.Table, 'table')
export const TableBody = withContext(DatePicker.TableBody, 'tableBody')
export const TableCell = withContext(DatePicker.TableCell, 'tableCell')
export const TableCellTrigger = withContext(DatePicker.TableCellTrigger, 'tableCellTrigger')
export const TableHead = withContext(DatePicker.TableHead, 'tableHead')
export const TableHeader = withContext(DatePicker.TableHeader, 'tableHeader')
export const TableRow = withContext(DatePicker.TableRow, 'tableRow')
export const Trigger = withContext(DatePicker.Trigger, 'trigger')
export const View = withContext(DatePicker.View, 'view')
export const ViewControl = withContext(DatePicker.ViewControl, 'viewControl')
export const ViewTrigger = withContext(DatePicker.ViewTrigger, 'viewTrigger')
export const YearSelect = withContext(DatePicker.YearSelect, 'yearSelect')

export type RootProps = ComponentProps<typeof Root>
export type ClearTriggerProps = {} & ComponentProps<typeof ClearTrigger>
export type ContentProps = {} & ComponentProps<typeof Content>
export type ControlProps = {} & ComponentProps<typeof Control>
export type InputProps = {} & ComponentProps<typeof Input>
export type LabelProps = {} & ComponentProps<typeof Label>
export type MonthSelectProps = {} & ComponentProps<typeof MonthSelect>
export type NextTriggerProps = {} & ComponentProps<typeof NextTrigger>
export type PositionerProps = {} & ComponentProps<typeof Positioner>
export type PrevTriggerProps = {} & ComponentProps<typeof PrevTrigger>
export type RangeTextProps = {} & ComponentProps<typeof RangeText>
export type TableProps = {} & ComponentProps<typeof Table>
export type TableBodyProps = {} & ComponentProps<typeof TableBody>
export type TableCellProps = {} & ComponentProps<typeof TableCell>
export type TableCellTriggerProps = {} & ComponentProps<typeof TableCellTrigger>
export type TableHeadProps = {} & ComponentProps<typeof TableHead>
export type TableHeaderProps = {} & ComponentProps<typeof TableHeader>
export type TableRowProps = {} & ComponentProps<typeof TableRow>
export type TriggerProps = {} & ComponentProps<typeof Trigger>
export type ViewProps = {} & ComponentProps<typeof View>
export type ViewControlProps = {} & ComponentProps<typeof ViewControl>
export type ViewTriggerProps = {} & ComponentProps<typeof ViewTrigger>
export type YearSelectProps = {} & ComponentProps<typeof YearSelect>

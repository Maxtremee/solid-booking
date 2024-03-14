import { type AvatarRootProps, Avatar as ArkAvatar } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { splitProps } from 'solid-js'

export type AvatarProps = {
  name?: string
  src?: string
} & AvatarRootProps & AvatarVariantProps

export const Avatar = (props: AvatarProps) => {
  const [variantProps, avatarProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(avatarProps, ['name', 'src'])
  const { fallback, image, root } = styles(variantProps)

  return (
    <ArkAvatar.Root class={root({ class: variantProps.class })} {...rootProps}>
      <ArkAvatar.Fallback class={fallback()}>
        {getInitials(localProps.name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image alt={localProps.name} src={localProps.src} class={image()} />
    </ArkAvatar.Root>
  )
}

type AvatarVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    variants: {
      size: {
        '2xl': {
          fallback: 'avatar__fallback--size_2xl',
          image: 'avatar__image--size_2xl',
          root: 'avatar__root--size_2xl',
        },
        xs: {
          fallback: 'avatar__fallback--size_xs',
          image: 'avatar__image--size_xs',
          root: 'avatar__root--size_xs',
        },
        sm: {
          fallback: 'avatar__fallback--size_sm',
          image: 'avatar__image--size_sm',
          root: 'avatar__root--size_sm',
        },
        md: {
          fallback: 'avatar__fallback--size_md',
          image: 'avatar__image--size_md',
          root: 'avatar__root--size_md',
        },
        lg: {
          fallback: 'avatar__fallback--size_lg',
          image: 'avatar__image--size_lg',
          root: 'avatar__root--size_lg',
        },
        xl: {
          fallback: 'avatar__fallback--size_xl',
          image: 'avatar__image--size_xl',
          root: 'avatar__root--size_xl',
        },
      },
    },
    slots: { fallback: 'avatar__fallback', image: 'avatar__image', root: 'avatar__root' },
    defaultVariants: { size: 'md' },
    base: 'avatar',
  },
  { twMerge: false },
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    fill="none"
  >
    <title>User</title>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part[0])
    .splice(0, 2)
    .join('')
    .toUpperCase()

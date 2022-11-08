import { createStyles, MantineSize, MantineColor } from '@mantine/core'

export interface IconStyleProps {
  size?: MantineSize
  color?: MantineColor
}

const sizes = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 32,
  xl: 64,
}

export const IconStyles = createStyles(
  (theme, { size = 'md', color = 'dark' }: IconStyleProps) => {
    const iconSize = theme.fn.size({ size, sizes })
    return {
      svg: {
        width: iconSize,
        height: iconSize,
      },
      path: {
        fill: theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7],
      },
      polygon: {
        fill: theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7],
      },
    }
  },
)

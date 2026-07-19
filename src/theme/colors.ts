// ─── Serene Path — Design Token: Colors ────────────────────────────────────
// Change ONE value here → entire app updates automatically.

export const colors = {
  primary:                  '#4a654e',
  onPrimary:                '#ffffff',
  primaryContainer:         '#8ba88e',
  onPrimaryContainer:       '#233d29',
  primaryFixed:             '#cceace',
  primaryFixedDim:          '#b0ceb2',
  onPrimaryFixed:           '#07200f',
  onPrimaryFixedVariant:    '#334d38',
  inversePrimary:           '#b0ceb2',

  secondary:                '#456370',
  onSecondary:              '#ffffff',
  secondaryContainer:       '#c5e5f4',
  onSecondaryContainer:     '#496774',
  secondaryFixed:           '#c8e7f7',
  secondaryFixedDim:        '#accbda',
  onSecondaryFixed:         '#001f29',
  onSecondaryFixedVariant:  '#2d4b57',

  tertiary:                 '#615e58',
  onTertiary:               '#ffffff',
  tertiaryContainer:        '#a4a099',
  onTertiaryContainer:      '#3a3732',
  tertiaryFixed:            '#e7e2da',
  tertiaryFixedDim:         '#cbc6be',
  onTertiaryFixed:          '#1d1b17',
  onTertiaryFixedVariant:   '#494641',

  error:                    '#ba1a1a',
  onError:                  '#ffffff',
  errorContainer:           '#ffdad6',
  onErrorContainer:         '#93000a',

  background:               '#f7faf8',
  onBackground:             '#181c1c',
  surface:                  '#f7faf8',
  surfaceDim:               '#d7dbd9',
  surfaceBright:            '#f7faf8',
  surfaceContainerLowest:   '#ffffff',
  surfaceContainerLow:      '#f1f4f2',
  surfaceContainer:         '#ebeeed',
  surfaceContainerHigh:     '#e6e9e7',
  surfaceContainerHighest:  '#e0e3e1',
  onSurface:                '#181c1c',
  onSurfaceVariant:         '#424842',
  inverseSurface:           '#2d3130',
  inverseOnSurface:         '#eef1f0',
  surfaceTint:              '#4a654e',
  surfaceVariant:           '#e0e3e1',

  outline:                  '#737972',
  outlineVariant:           '#c2c8c0',
} as const

export type ColorToken = keyof typeof colors

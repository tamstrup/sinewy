// Palette values are adapted from Radix Colors 3.0.0.
// See ../licenses/radix-colors.txt for attribution and license terms.

const palettes = {
  gray: [
    '#fcfcfc #111111', '#f9f9f9 #191919', '#f0f0f0 #222222', '#e8e8e8 #2a2a2a',
    '#e0e0e0 #313131', '#d9d9d9 #3a3a3a', '#cecece #484848', '#bbbbbb #606060',
    '#8d8d8d #6e6e6e', '#838383 #7b7b7b', '#646464 #b4b4b4', '#202020 #eeeeee'
  ],
  indigo: [
    '#fdfdfe #11131f', '#f7f9ff #141726', '#edf2fe #182449', '#e1e9ff #1d2e62',
    '#d2deff #253974', '#c1d0ff #304384', '#abbdf9 #3a4f97', '#8da4ef #435db1',
    '#3e63dd #3e63dd', '#3358d4 #5472e4', '#3a5bc7 #9eb1ff', '#1f2d5c #d6e1ff'
  ],
  blue: [
    '#fbfdff #0d1520', '#f4faff #111927', '#e6f4fe #0d2847', '#d5efff #003362',
    '#c2e5ff #004074', '#acd8fc #104d87', '#8ec8f6 #205d9e', '#5eb1ef #2870bd',
    '#0090ff #0090ff', '#0588f0 #3b9eff', '#0d74ce #70b8ff', '#113264 #c2e6ff'
  ],
  cyan: [
    '#fafdfe #0b161a', '#f2fafb #101b20', '#def7f9 #082c36', '#caf1f6 #003848',
    '#b5e9f0 #004558', '#9ddde7 #045468', '#7dcedc #12677e', '#3db9cf #11809c',
    '#00a2c7 #00a2c7', '#0797b9 #23afd0', '#107d98 #4ccce6', '#0d3c48 #b6ecf7'
  ],
  teal: [
    '#fafefd #0d1514', '#f3fbf9 #111c1b', '#e0f8f3 #0d2d2a', '#ccf3ea #023b37',
    '#b8eae0 #084843', '#a1ded2 #145750', '#83cdc1 #1c6961', '#53b9ab #207e73',
    '#12a594 #12a594', '#0d9b8a #0eb39e', '#008573 #0bd8b6', '#0d3d38 #adf0dd'
  ],
  green: [
    '#fbfefc #0e1512', '#f4fbf6 #121b17', '#e6f6eb #132d21', '#d6f1df #113b29',
    '#c4e8d1 #174933', '#adddc0 #20573e', '#8eceaa #28684a', '#5bb98b #2f7c57',
    '#30a46c #30a46c', '#2b9a66 #33b074', '#218358 #3dd68c', '#193b2d #b1f1cb'
  ],
  amber: [
    '#fefdfb #16120c', '#fefbe9 #1d180f', '#fff7c2 #302008', '#ffee9c #3f2700',
    '#fbe577 #4d3000', '#f3d673 #5c3d05', '#e9c162 #714f19', '#e2a336 #8f6424',
    '#ffc53d #ffc53d', '#ffba18 #ffd60a', '#ab6400 #ffca16', '#4f3422 #ffe7b3'
  ],
  orange: [
    '#fefcfb #17120e', '#fff7ed #1e160f', '#ffefd6 #331e0b', '#ffdfb5 #462100',
    '#ffd19a #562800', '#ffc182 #66350c', '#f5ae73 #7e451d', '#ec9455 #a35829',
    '#f76b15 #f76b15', '#ef5f00 #ff801f', '#cc4e00 #ffa057', '#582d1d #ffe0c2'
  ],
  red: [
    '#fffcfc #191111', '#fff7f7 #201314', '#feebec #3b1219', '#ffdbdc #500f1c',
    '#ffcdce #611623', '#fdbdbe #72232d', '#f4a9aa #8c333a', '#eb8e90 #b54548',
    '#e5484d #e5484d', '#dc3e42 #ec5d5e', '#ce2c31 #ff9592', '#641723 #ffd1d9'
  ],
  crimson: [
    '#fffcfd #191114', '#fef7f9 #201318', '#ffe9f0 #381525', '#fedce7 #4d122f',
    '#facedd #5c1839', '#f3bed1 #6d2545', '#eaacc3 #873356', '#e093b2 #b0436e',
    '#e93d82 #e93d82', '#df3478 #ee518a', '#cb1d63 #ff92ad', '#621639 #fdd3e8'
  ],
  pink: [
    '#fffcfe #191117', '#fef7fb #21121d', '#fee9f5 #37172f', '#fbdcef #4b143d',
    '#f6cee7 #591c47', '#efbfdd #692955', '#e7acd0 #833869', '#dd93c2 #a84885',
    '#d6409f #d6409f', '#cf3897 #de51a8', '#c2298a #ff8dcc', '#651249 #fdd1ea'
  ],
  purple: [
    '#fefcfe #18111b', '#fbf7fe #1e1523', '#f7edfe #301c3b', '#f2e2fc #3d224e',
    '#ead5f9 #48295c', '#e0c4f4 #54346b', '#d1afec #664282', '#be93e4 #8457aa',
    '#8e4ec6 #8e4ec6', '#8347b9 #9a5cd0', '#8145b5 #d19dff', '#402060 #ecd9fa'
  ]
}

const aliases = { accent: 'indigo' }
const contrasts = { amber: '#21201c' }
const steps = [1, 2, 3, 4, 7, 8, 9, 10, 11, 12]

const themeColors = Object.freeze([
  'gray', 'accent', 'red', 'orange', 'amber', 'green', 'teal',
  'cyan', 'blue', 'indigo', 'purple', 'pink', 'crimson'
])

function themeColorStyle(color, style) {
  const name = aliases[color] || color
  const palette = palettes[name]
  if (!palette)
    return style

  const variables = Object.fromEntries(steps.map(step => [
    `--sinewy-accent-${step}`,
    lightDark(palette[step - 1])
  ]))

  variables['--sinewy-accent-contrast'] = contrasts[name] || 'white'
  variables['--sinewy-panel'] = 'light-dark(#fff, #191919)'
  ;[1, 2, 3, 4, 6, 7, 8, 9, 11, 12].forEach(step => {
    variables[`--sinewy-neutral-${step}`] = lightDark(palettes.gray[step - 1])
  })
  variables['--sinewy-extreme'] = 'light-dark(#000, #fff)'

  return {
    ...variables,
    ...style
  }
}

function lightDark(pair) {
  const [light, dark] = pair.split(' ')
  return `light-dark(${light}, ${dark})`
}

export { themeColors, themeColorStyle }

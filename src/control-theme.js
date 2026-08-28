function controlTheme(component) {
  return component`
    min-height 36
    display inline-flex
    align-items center
    justify-content center
    gap 8
    padding 0 11
    border 1px solid transparent
    border-radius 9
    appearance none
    background transparent
    color inherit
    cursor pointer
    font inherit
    font-size 13
    font-weight 750
    line-height 1
    text-align center
    text-decoration none
    user-select none
    white-space nowrap
    transition background-color 80ms ease, border-color 80ms ease, color 80ms ease, transform 60ms ease

    &[data-size='1'] {
      min-height 30
      gap 6
      padding 0 9
      border-radius 7
      font-size 12
    }

    &[data-size='3'] {
      min-height 42
      gap 9
      padding 0 14
      border-radius 11
      font-size 14
    }

    &[data-variant='solid'] {
      background $sinewy-accent-9
      color $sinewy-accent-contrast
    }

    &[data-variant='solid']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='solid'][data-state='open'] {
      background $sinewy-accent-10
    }

    &[data-variant='solid']:active:not(:disabled):not([data-disabled]) {
      background $sinewy-accent-10
    }

    &[data-variant='soft'] {
      background $sinewy-accent-3
      color $sinewy-accent-11
    }

    &[data-variant='soft']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='soft'][data-state='open'] {
      background $sinewy-accent-4
      color $sinewy-accent-12
    }

    &[data-variant='soft']:active:not(:disabled):not([data-disabled]) {
      background $sinewy-accent-4
      color $sinewy-accent-12
    }

    &[data-variant='outline'] {
      border-color $sinewy-accent-7
      background $sinewy-panel
      color $sinewy-accent-11
    }

    &[data-variant='outline']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='outline'][data-state='open'] {
      border-color $sinewy-accent-8
      background $sinewy-accent-2
      color $sinewy-accent-12
    }

    &[data-variant='outline']:active:not(:disabled):not([data-disabled]) {
      border-color $sinewy-accent-8
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    &[data-variant='ghost'] {
      background transparent
      color $sinewy-accent-11
    }

    &[data-variant='ghost']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='ghost'][data-state='open'] {
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    &[data-variant='ghost']:active:not(:disabled):not([data-disabled]) {
      background $sinewy-accent-4
      color $sinewy-accent-12
    }

    &[data-high-contrast][data-variant='solid'] {
      background $sinewy-accent-12
      color $sinewy-accent-1
    }

    &[data-color='gray'][data-variant='solid'] {
      background $sinewy-accent-12
      color $sinewy-accent-1
    }

    &[data-high-contrast][data-variant='solid']:hover:not(:disabled):not([data-disabled]),
    &[data-high-contrast][data-variant='solid']:active:not(:disabled):not([data-disabled]),
    &[data-high-contrast][data-variant='solid'][data-state='open'],
    &[data-color='gray'][data-variant='solid']:hover:not(:disabled):not([data-disabled]),
    &[data-color='gray'][data-variant='solid']:active:not(:disabled):not([data-disabled]),
    &[data-color='gray'][data-variant='solid'][data-state='open'] {
      background $sinewy-extreme
    }

    &[data-high-contrast]:not([data-variant='solid']) {
      color $sinewy-accent-12
    }

    &[data-high-contrast][data-variant='outline'] {
      border-color $sinewy-accent-8
    }

    &[data-state='off'][data-variant='solid'] {
      background $sinewy-neutral-3
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='soft'] {
      background $sinewy-neutral-3
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='solid']:hover:not(:disabled) {
      background $sinewy-neutral-4
      color $sinewy-neutral-12
    }

    &[data-state='off'][data-variant='soft']:hover:not(:disabled) {
      background $sinewy-neutral-4
      color $sinewy-neutral-12
    }

    &[data-state='off'][data-variant='outline'] {
      border-color $sinewy-neutral-7
      background $sinewy-panel
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='outline']:hover:not(:disabled) {
      border-color $sinewy-neutral-8
      background $sinewy-neutral-2
      color $sinewy-neutral-12
    }

    &[data-state='off'][data-variant='ghost'] {
      background transparent
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='ghost']:hover:not(:disabled) {
      background $sinewy-neutral-3
      color $sinewy-neutral-12
    }

    &[data-state='on'][data-variant='ghost'] {
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    &:active:not(:disabled):not([data-disabled]) {
      transform translateY(1px)
    }

    &:focus-visible {
      outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
      outline-offset 2px
    }

    &:disabled,
    &[data-disabled] {
      cursor default
      opacity 0.48
    }

    @media (prefers-reduced-motion: reduce) {
      transition none
    }
  `
}

export { controlTheme }

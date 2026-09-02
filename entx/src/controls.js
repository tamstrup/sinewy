import s from 'sin'
import {
  Button as SinewyButton,
  Checkbox as SinewyCheckbox,
  NativeSelect,
  Switch,
} from 'sinewy/theme'

// Thin visual adapters: Sinewy continues to own native semantics and state.
export const ButtonBase = s((attrs, children) =>
  SinewyButton({
    variant: 'ghost',
    color: 'gray',
    ...attrs,
    style: { minHeight: 0, ...attrs.style },
  }, children)
)

export const Checkbox = s((attrs) =>
  SinewyCheckbox({ size: '1', color: 'indigo', defaultChecked: attrs.checked, ...attrs })
)
export const DraftSwitch = s((attrs) =>
  Switch({ size: '1', color: 'indigo', defaultChecked: attrs.checked, ...attrs })
)

const chevron = `url("data:image/svg+xml,${
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none"><path d="m1 1 5 5 5-5" stroke="#292930" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  )
}")`

// Keep the platform picker, with a consistently inset closed-control icon in Safari too.
export const Select = s((attrs, children) =>
  NativeSelect({
    size: '1',
    color: 'gray',
    ...attrs,
    data: { entxSelect: true, ...attrs.data },
    style: {
      width: '100%',
      appearance: 'none',
      backgroundImage: chevron,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 10px center',
      backgroundSize: '12px 8px',
      padding: '9px 32px 9px 10px',
      borderRadius: '6px',
      fontWeight: 400,
      ...attrs.style,
    },
  }, children)
)
Select.Option = NativeSelect.Option

s.css`
  @media (forced-colors: active) {
    select[data-entx-select] {
      appearance auto !important
      background-image none !important
    }
  }
`

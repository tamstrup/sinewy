import s from 'sin'
import { Combobox } from 'sinewy/theme'

// Account names may be new or partial; accept typed text as well as suggestions.
export default s(({ value, accounts, label, placeholder, onchange }) =>
  Combobox(
    {
      value: value || null,
      onvaluechange: (next) => onchange(next || ''),
      size: '1',
      color: 'indigo',
      style: { width: '100%', minWidth: 0, gap: 0 },
    },
    Combobox.Control(
      {
        style: {
          padding: 0,
          border: 0,
          minHeight: 0,
          boxShadow: 'none',
          background: 'transparent',
        },
      },
      Combobox.Input({
        'aria-label': label,
        placeholder,
        style: { padding: '0 6px', height: '28px', fontWeight: 400 },
        oninput: (event) => onchange(event.target.value),
      }),
    ),
    Combobox.Content(
      { 'aria-label': label },
      accounts.map((account) => Combobox.Item({ key: account, value: account }, account)),
    ),
  )
)

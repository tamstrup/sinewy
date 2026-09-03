import s from 'sin'
import { Button, Dialog } from 'sinewy/theme'

const Input = s`input
  width 100%
  margin-top 6
  padding 10px 12px
  border 1px solid #dcd9e6
  border-radius 7
  background #fff
  color #292930
  font inherit
  font-size 22
  font-variant-numeric tabular-nums

  &:focus-visible { outline 2px solid #968eeb; outline-offset 2px }
  &[aria-invalid='true'] { border-color #b6374f }
`

const Label = s`label
  display block
  font-size 12
  font-weight 600
`
const ErrorMessage = s`p
  color #b6374f
  font-size 12
  margin-top 8
`
const Actions = s`div
  display flex
  justify-content end
  gap 8
  margin-top 20
`

export default s(({ open, value, error, t, oninput, onsubmit, onclose }) =>
  Dialog(
    {
      id: 'shortcut-year',
      open,
      onopenchange: (next) => {
        if (!next) onclose()
      },
    },
    Dialog.Content(
      { size: '1', color: 'indigo' },
      Dialog.Title(t('setYear')),
      Dialog.Description(t('setYearDescription')),
      s`form margin-top 20`(
        {
          novalidate: true,
          onsubmit: (event) => {
            event.preventDefault()
            onsubmit()
          },
        },
        Label(
          t('year'),
          Input({
            id: 'shortcut-year-input',
            autofocus: true,
            type: 'text',
            inputmode: 'numeric',
            autocomplete: 'off',
            value,
            'aria-invalid': error ? 'true' : undefined,
            'aria-describedby': error ? 'shortcut-year-error' : undefined,
            oninput: (event) => oninput(event.target.value),
          }),
        ),
        error
          ? ErrorMessage({
            id: 'shortcut-year-error',
            role: 'alert',
          }, t('invalidYear'))
          : null,
        Actions(
          Dialog.Close({ size: '1' }, t('cancel')),
          Button({ type: 'submit', size: '1', color: 'indigo' }, t('applyYear')),
        ),
      ),
    ),
  )
)

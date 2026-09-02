import s from 'sin'
import { Select } from './controls.js'

const Page = s`section
  max-width 760
  margin 0 auto
  padding 38 40
  h1 { font-size 22; font-weight 620; letter-spacing -.5px; margin 0 0 7 }
  p { color #74747d; font-size 12; line-height 1.7; margin 0 }
`
const Row = s`label
  display grid
  grid-template-columns minmax(0, 1fr) 225px
  align-items center
  gap 28
  padding 24 0
  border-bottom 1px solid #e8e8ec
  strong { display block; font-size 13; font-weight 550; margin-bottom 5 }
  select { border-color #dcdce2; color #292930 }
  select:focus-visible { outline 2px solid #7777b8; outline-offset 3 }
`
const Preview = s`section
  margin 28 0
  padding 20 0
  h2 { font-size 11; text-transform uppercase; letter-spacing 1px; color #777782; margin 0 0 18 }
  dl { display grid; grid-template-columns 1fr auto; gap 14; font-size 13; margin 0 }
  dt { color #74747d }
  dd { margin 0; font-variant-numeric tabular-nums; text-align right }
`

export default s((_attrs, _children, context) => {
  const i18n = context.entx.i18n
  const { t } = i18n
  context.onremove(i18n.preferences.observe(context.redraw))
  context.onremove(i18n.storageAvailable.observe(context.redraw))

  return () =>
    Page(
      { 'aria-labelledby': 'settings-title' },
      s`h1`({ id: 'settings-title' }, t('settings')),
      s`p`(t('preferencesSubtitle')),
      Row(
        s`span`(s`strong`(t('language')), s`p`(t('languageHelp'))),
        Select(
          {
            'aria-label': t('language'),
            data: { preference: 'language' },
            value: i18n.preferences().language,
            onchange: (event) => i18n.update({ language: event.target.value }),
          },
          s`option`(
            { value: 'da', lang: 'da', selected: i18n.preferences().language === 'da' },
            'Dansk',
          ),
          s`option`(
            { value: 'en', lang: 'en', selected: i18n.preferences().language === 'en' },
            'English',
          ),
        ),
      ),
      Row(
        s`span`(s`strong`(t('regionalFormat')), s`p`(t('regionalHelp'))),
        Select(
          {
            'aria-label': t('regionalFormat'),
            data: { preference: 'locale' },
            value: i18n.preferences().locale,
            onchange: (event) => i18n.update({ locale: event.target.value }),
          },
          s`option`(
            { value: 'da-DK', selected: i18n.preferences().locale === 'da-DK' },
            t('danishFormat'),
          ),
          s`option`(
            { value: 'en-GB', selected: i18n.preferences().locale === 'en-GB' },
            t('englishFormat'),
          ),
        ),
      ),
      Row(
        s`span`(s`strong`(t('commodity')), s`p`(t('commodityHelp'))),
        Select(
          {
            'aria-label': t('commodity'),
            data: { preference: 'commodity' },
            value: i18n.preferences().commodity,
            onchange: (event) => i18n.update({ commodity: event.target.value }),
          },
          ['DKK', 'EUR', 'USD', 'GBP'].map((value) =>
            s`option`({ value, selected: i18n.preferences().commodity === value }, value)
          ),
        ),
      ),
      Preview(
        s`h2`(t('preview')),
        s`dl`(
          s`dt`(t('numberExample')),
          s`dd`(i18n.amount(1234.56), ' ', i18n.preferences().commodity),
          s`dt`(t('dateExample')),
          s`dd`(i18n.date('2026-09-02')),
          s`dt`(t('entryExample')),
          s`dd`(i18n.amount(-1234.56)),
        ),
      ),
      s`p`({ role: 'status' }, t(i18n.storageAvailable() ? 'savedLocally' : 'storageUnavailable')),
      s`p margin-top 12`(t('dateControlHelp')),
    )
})

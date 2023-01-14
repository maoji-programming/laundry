import { createI18n } from 'vue-i18n'

import zh from './lang/cn.json'
import en from './lang/en.json'

const i18n = createI18n({
  locale: 'cn',
  fallbackLocale: 'cn',
  messages: {
    cn,
    en
  }
})
export default i18n

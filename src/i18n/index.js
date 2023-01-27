import { createI18n } from 'vue-i18n'

import store from "@/store";
import cn from './lang/cn.json'
import en from './lang/en.json'

let locale = "cn"

if (localStorage.getItem("i18nLang")) {
  
  const localeData = localStorage.getItem("i18nLang");
  locale = localeData !== null ? localeData : "cn";
} else {
  localStorage.setItem("i18nLang", locale);
}

store.commit("setI18nLang", locale);

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'cn',
  messages: {
    cn,
    en
  }
  
})
export default i18n

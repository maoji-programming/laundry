import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang',() => {
  const lang = ref(null);
  function setI18nLang( n_lang) {
    lang.value = n_lang;
    localStorage.setItem("i18nLang", n_lang);
  }

  return {
    lang, setI18nLang
  }
})
//export useLangStore;
<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
          <rect-window v-if="section == 'display'" :title="$t('home.setting.display.T')">
            <h3>{{$t('home.setting.display.language')}}</h3>
            <select class="form-select" v-model="$i18n.locale" @change="handleChangeLanguage($i18n.locale)">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ langMap[locale] }}</option>
            </select>
          </rect-window>
      </div>
      <div class="col-2">
          <rect-button :title="$t('home.setting.display.T')" background="#22aaee" icon="fa-solid fa-coffee" @click="display()"></rect-button>
          <rect-button title="Receipt" background="#22aaee"></rect-button>
          <rect-button title="Item" background="#22aaee"></rect-button>
          <router-link to="/dashboard"><rect-button title="Back" background="#22aaee"></rect-button></router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
    import { useI18n } from 'vue-i18n'
    import { useLangStore } from "@/store/lang";
   
        
    const store = useLangStore();
    const { locale } = useI18n();
    const section = 'display';
    const langMap = {
        "cn":"中文",
        "en":"English"
    }
    const handleChangeLanguage = (lang) => {
        console.log(lang)
        locale.value = lang;
        store.setI18nLang(lang);
        
    }
    
</script>
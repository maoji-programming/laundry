<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
          <rect-window v-if="section == 'display'" :title="$t('home.setting.display.T')">
            <h3>{{$t('home.setting.display.language')}}</h3>
            <div class="mb-3">
                <label for="customerName" class="form-label">Customer Name</label>
                <input type="text" class="form-control" id="customerName" >
            </div>
            <div class="mb-3">
                <label for="customerPhone" class="form-label">Customer Phone</label>
                <input type="text" class="form-control" id="customerPhone" aria-describedby="phoneHelp">
                <div id="phoneHelp" class="form-text">*acquired</div>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    中文
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    English
                </label>
            </div>
            <select @change="handleChangeLanguage">
            <option value="tw"></option>
            <option value="en"></option>
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
<script>
    import { useI18n } from 'vue-i18n'
    export default {
        props: {
            msg: String
        },
        methods: {
            display(){
                section = 'display'
            }
        },
        setup(props, context) {
            const { locale } = useI18n()
            section = 'display'
            const handleChangeLanguage = (lang) => {
                locale.value = lang;
            };
            return {
                handleChangeLanguage
            }
        },
    }
</script>
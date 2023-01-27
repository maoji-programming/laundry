import { createApp,defineCustomElement } from 'vue'


import fs from 'fs'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
 
//perfect-scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'





import './assets/main.css'
import RectWindow from './components/elements/RectWindow.vue';
import RectButton from './components/elements/RectButton.vue';
import Receipt from './components/elements/Receipt.vue';

import AddRecords from './components/AddRecords.vue';
import ReceiptAccordion from './components/elements/ReceiptAccordion.vue';

import IconError from "./components/icons/status/IconError.vue";
import IconFinished from "./components/icons/status/IconFinished.vue";
import IconPending from "./components/icons/status/IconPending.vue";
import IconReceived from "./components/icons/status/IconReceived.vue";
import IconWashing from "./components/icons/status/IconWashing.vue";

import IconBleach from "./components/icons/service/IconBleach.vue";
import IconDry from "./components/icons/service/IconDry.vue";
import IconDryClean from "./components/icons/service/IconDryClean.vue";
import IconIroning from "./components/icons/service/IconIroning.vue";
import IconMachineWash from "./components/icons/service/IconMachineWash.vue";
import IconTumbleDry from "./components/icons/service/IconTumbleDry.vue"

import IconMore from "./components/icons/IconMore.vue";
import IconAdd from "./components/icons/IconAdd.vue";
import IconSearch from "./components/icons/IconSearch.vue";
import IconDatabase from "./components/icons/IconDatabase.vue";
import IconSetting from "./components/icons/IconSetting.vue";

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(store)
 
app.use(PerfectScrollbar)


// const StatusIconComponentContext = import.meta.glob('./components/icons/status/*.vue')
// console.log(StatusIconComponentContext)
// Object.keys(StatusIconComponentContext).forEach((componentFilePath) => {
//     const componentName = componentFilePath.split('/').pop().split('.')[0];
//     console.log(componentName)
//     app.component(componentName, StatusIconComponentContext[componentFilePath]);
// })

//status icon
app.component('IconError',IconError)
app.component('IconFinished',IconFinished)
app.component('IconPending',IconPending)
app.component('IconReceived',IconReceived)
app.component('IconWashing',IconWashing)
app.component('IconMore',IconMore)

app.component('IconBleach',IconBleach)
app.component('IconDry',IconDry)
app.component('IconDryClean',IconDryClean)
app.component('IconIroning',IconIroning)
app.component('IconMachineWash',IconMachineWash)
app.component('IconTumbleDry',IconTumbleDry)

app.component('IconAdd',IconAdd)
app.component('IconSearch',IconSearch)
app.component('IconDatabase',IconDatabase)
app.component('IconSetting',IconSetting)

app.component('rect-window', RectWindow)
app.component('rect-button',RectButton)
app.component('receipt',Receipt)

app.component('add-records',AddRecords)

app.component('receipt-accordion',ReceiptAccordion)
//app.component('receipt-accordation-item',ReceiptAccordationItem)
app.mount('#app')

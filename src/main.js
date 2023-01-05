import { createApp,defineCustomElement } from 'vue'


import fs from 'fs'
import App from './App.vue'
import router from './router'

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

import IconError from "./components/icons/status/IconError.vue";
import IconFinished from "./components/icons/status/IconFinished.vue";
import IconPending from "./components/icons/status/IconPending.vue";
import IconReceived from "./components/icons/status/IconReceived.vue";
import IconWashing from "./components/icons/status/IconWashing.vue";

import IconMore from "./components/icons/IconMore.vue";
import IconAdd from "./components/icons/IconAdd.vue";
import IconSearch from "./components/icons/IconSearch.vue";
import IconDatabase from "./components/icons/IconDatabase.vue";
import IconSetting from "./components/icons/IconSetting.vue";

const app = createApp(App)

app.use(router)
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

app.component('IconAdd',IconAdd)
app.component('IconSearch',IconSearch)
app.component('IconDatabase',IconDatabase)
app.component('IconSetting',IconSetting)

app.component('rect-window', RectWindow)
app.component('rect-button',RectButton)
app.component('receipt',Receipt)

app.component('add-records',AddRecords)

app.mount('#app')

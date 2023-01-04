import { createApp,defineCustomElement } from 'vue'


import fs from 'fs'
import App from './App.vue'
import router from './router'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
 
import { library } from '@fortawesome/fontawesome-svg-core' // import the fontawesome core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // import font awesome icon component
import { faUserSecret } from '@fortawesome/free-solid-svg-icons' // import specific icons
import { faCoffee as fasCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fasCoffee)

/* add icons to the library */
library.add(faUserSecret)

import './assets/main.css'
import RectWindow from './components/elements/RectWindow.vue'
import RectButton from './components/elements/RectButton.vue'
import Receipt from './components/elements/Receipt.vue'

import IconError from "./components/icons/status/IconError.vue";
import IconFinished from "./components/icons/status/IconFinished.vue";
import IconPending from "./components/icons/status/IconFinished.vue";
import IconReceived from "./components/icons/status/IconReceived.vue";
import IconWashing from "./components/icons/status/IconWashing.vue";

const app = createApp(App)

app.use(router)


// const StatusIconComponentContext = import.meta.glob('./components/icons/status/*.vue')
// console.log(StatusIconComponentContext)
// Object.keys(StatusIconComponentContext).forEach((componentFilePath) => {
//     const componentName = componentFilePath.split('/').pop().split('.')[0];
//     console.log(componentName)
//     app.component(componentName, StatusIconComponentContext[componentFilePath]);
// })

app.component('IconError',IconError)
app.component('IconFinished',IconFinished)
app.component('IconPending',IconPending)
app.component('IconReceived',IconReceived)
app.component('IconWashing',IconWashing)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('rect-window', RectWindow)
app.component('rect-button',RectButton)
app.component('receipt',Receipt)
app.mount('#app')

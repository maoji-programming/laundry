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
import TableRecord from './components/elements/TableRecord.vue'

customElements.define("lms-window",defineCustomElement(RectWindow))
customElements.define("lms-button",defineCustomElement(RectButton))
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VolverPlugin } from '@volverjs/ui-vue'
import { normal } from '@volverjs/ui-vue/icons'
import { createPinia } from 'pinia'
import { httpClient } from '~/common/HttpClient'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(httpClient)
app.use(pinia)
app.use(VolverPlugin, {
    iconsCollections: [normal],
})

app.mount('#app')

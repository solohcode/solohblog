import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VWave from 'v-wave'
import './registerServiceWorker'
import './assets/tailwind.css'
import 'animate.css'
import VueWriter from 'vue-writer'
import { AnimateInViewComponent, AnimateInViewDirective } from '@neeravp/vue-3-animate-in-view'
import VueKinesis from 'vue-kinesis'

const project = createApp(App)

project.use(VueWriter)
project.use(router)
project.use(VWave)
project.use(VueKinesis)
project.component('animate-in-view', AnimateInViewComponent)
project.directive('animate-inview', AnimateInViewDirective)

project.mount('#app')

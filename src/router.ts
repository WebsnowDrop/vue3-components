import Doc from './views/Doc.vue';
import Docdemo from './components/Doc.vue';
import Home from './views/Home.vue';
import Switch from './components/Switch.vue';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import Tabs from './components/Tabs.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs },
                { path: '', component: Docdemo },
            ]
        },
    ]
})
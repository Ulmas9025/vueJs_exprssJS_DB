import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/app-home/AppHome.vue';
import AppStatusPanel from './components/app-status-panel/AppStatusPanel.vue';
import AppMessages from './components/app-messages/AppMessages.vue';
import AppProduct from './components/app-products/AppProduct.vue';
import AppSale from './components/app-sale/AppSale.vue';
import AppSeller from './components/app-seller/AppSeller.vue';
import AppCustomer from './components/app-customer/AppCustomer.vue';


const router = createRouter({
    history: createWebHistory (),
    routes : [
        {path: '/' , component: Home},
        {path: '/statusPanel' , component: AppStatusPanel},
        {path: '/messages' , component: AppMessages},
        {path: '/product' , component: AppProduct},
        {path: '/sale' , component: AppSale},
        {path: '/seller' , component: AppSeller},
        {path: '/customer' , component: AppCustomer}
    ]
})




export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'

import FormComponent from '@/components/Form'
import PersonsComponent from '@/components/Persons'
import FileUploads from '@/components/FileUploads'

Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        name: "landingPage",
        component: PersonsComponent,
    },
    {
        path: "/form",
        name: "form",
        component: FormComponent,
    },
    {
        path: "/file",
        name: "file",
        component: FileUploads,
    }
]

//Initialize a vue router
const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router
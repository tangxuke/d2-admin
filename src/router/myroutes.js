import layout from '@/layout/header-aside'

import axios from './../plugin/axios'

let routes=[]

axios.get('/menus/menu-list')
    .then(value=>{
        routes=value.result.routes
    })



export default [
    {
        path:'/',
        component:layout,
        redirect:{name:'index'},
        children:[
            {
                path:'index',
                name:'index',
                component:()=>import('@/pages/index')
            }
        ]
    }
]
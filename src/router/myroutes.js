import layoutHeaderAside from '@/layout/header-aside'

export default [
    {
        path:'/system',
        component:layoutHeaderAside,
        children:[
            {
                path:'department',
                name:'system-department',
                component:()=>import('@/pages/system/department')
            },
            {
                path:'classroom',
                name:'system-classroom',
                component:()=>import('@/pages/system/classroom')
            }
        ]
    }
]
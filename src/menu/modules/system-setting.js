// layout
import layoutHeaderAside from '@/layout/header-aside'

//系统设置菜单
export default {
    path: '/setting',
    title: '系统设置',
    icon: 'table',
    component:layoutHeaderAside,
    children: [
        {
            path: '/setting/bmsz',
            title: '部门设置'
        }
    ]
}
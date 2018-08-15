import axios from 'axios'

export default {
    state:{
    },
    getters:{

    },
    mutations:{
        'get-menu':function(state,vm){
            vm.$axios.get('/menus/menu-list')
            .then(value=>{
                if(value.success){
                    let root={
                        path:'/test',
                        component:()=>import('@/layout/header-aside'),
                        children:[]
                    };

                    value.result.routes.forEach(item=>{
                        root.children.push({
                            path:item.path,
                            name:item.name,
                            title:item.title,
                            component:()=>import(`@/pages/${item.component}`)
                        })
                    })
                    //添加路由
                    vm.$router.addRoutes([
                        root
                    ])
                    vm.$store.commit('d2adminMenuHeaderSet',value.result.menu)
                }else{
                    alert(value.message)
                }
            }).catch(err=>{
                alert(err.message)
            })
        }
    }
}
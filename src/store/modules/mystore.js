import axios from 'axios'

export default {
    state:{
        //用户菜单
        userMenus:[{test:1}]
    },
    getters:{

    },
    mutations:{
        'get-menu':function(state,vm){
            vm.$axios.get('/menus/menu-list')
            .then(value=>{
                if(value.success){
                    state.userMenus=value.result;
                }else{
                    alert(value.message)
                }
            }).catch(err=>{
                alert(err.message)
            })
        }
    }
}
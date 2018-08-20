import axios from 'axios'

export default {
    state:{
    },
    getters:{

    },
    mutations:{
        'get-menu':function(state,vm){
            console.log(vm.$axios.defaults)
            vm.$axios.get('/menus/menu-list')
            .then(value=>{
                if(value.success){
                    vm.$store.commit('d2adminMenuHeaderSet',value.result)
                }else{
                    alert(value.message)
                }
            }).catch(err=>{
                alert(err.message)
            })
        }
    }
}
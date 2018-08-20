
<template>
    <d2-container>
        <button @click="show">Modal Test</button>
        <wisemis-modal v-if="visible"></wisemis-modal>
    </d2-container>
    
</template>
<script>
export default {
    data:function(){
        return {
            visible:false
        }
    },
    methods:{
        show:function(){
            this.visible=true;
        }
    }
}
</script>
  
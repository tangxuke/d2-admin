
<template>
    <d2-container>
        <button @click="show">Modal Test</button>
        <wisemis-modal ref="modal">test</wisemis-modal>
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
            this.$refs.modal.visible=true;
        }
    }
}
</script>
  
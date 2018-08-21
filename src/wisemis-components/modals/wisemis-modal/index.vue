<template>
    <Modal v-model="visible" draggable scrollable title="Modal">
            <slot>模态框内容</slot>
    </Modal>
</template>
<script>
    export default {
        data:function(){
            return {
                visible:false
            }
            
        }
    }
</script>

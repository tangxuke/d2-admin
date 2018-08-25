<template>
    <Modal :value="visible1" draggable scrollable title="Modal">
            <slot>模态框内容</slot>
    </Modal>
</template>
<script>
    export default {
        props:{
            visible1:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

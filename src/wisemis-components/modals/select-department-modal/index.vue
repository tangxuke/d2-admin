<template>
    <wisemis-modal :visible1="visible2">
        <my-form model="department"></my-form>
    </wisemis-modal>
</template>

<script>
export default {
    props:{
        visible2:{
            type:Boolean,
            default:false
        }
    }
}
</script>

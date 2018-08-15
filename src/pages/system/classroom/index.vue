<template>
    <d2-container>
        教室设置
        <button @click="show">show</button>
    </d2-container>
</template>

<script>
export default {
    methods:{
        show:function(){
            alert(JSON.stringify(this.$store.state.mystore.userMenus))
        }
    }
}
</script>

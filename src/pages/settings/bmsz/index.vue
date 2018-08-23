<template>
<d2-container>
    <Row>
        <Col>
            <my-toolbar></my-toolbar>
            <Divider />
        </Col>
    </Row>
    <Row  :gutter="16">
        <Col span="12">
            <my-tree></my-tree>
        </Col>
        <Col span="12">
            <my-table></my-table>
        </Col>
    </Row>     
</d2-container>
</template>

<script>
import Controller from '@/wisemis-components/common/controller'
export default {
    data:function(){
        return {
        }
    },
    methods:{

    },
    mounted:function(){

    },
    watch:{
        
    }
}
</script>


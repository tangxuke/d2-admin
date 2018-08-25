<template>
<d2-container>
    <Row  :gutter="16">
        <Col span="10">
            <my-tree model="department" :event="event"></my-tree>
        </Col>
        <Col span="14">
            <my-form model="department" :event="event"></my-form>
        </Col>
    </Row>   
</d2-container>
</template>

<script>
import Vue from 'vue'

export default {
    data(){
        return {
            event:new Vue()
        }
    }
}
</script>

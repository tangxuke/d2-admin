<template>
    <Tree :data="data5" :render="renderContent"></Tree>
</template>
<script>
    import axios from 'axios'
    export default {
        props:['model'],
        data () {
            return {
                data5: [],
                buttonProps: {
                    type: 'default',
                    size: 'small',
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: data.icon,
                                size:20
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                this.$prompt('请输入节点名称', '提示').then(({ value }) => {
                    children.push({title:value,expand:true})
                    this.$set(data, 'children', children);
                });
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        },
        mounted:function(){

            if(!this.model){
                alert('没有设置模型名称！');
                return;
            }
            this.$axios.post(`/models/${this.model}/tree`).then(value=>{

                if(value.success){
                    this.data5=value.result;
                }else{
                    alert(value.message)
                }
            }).catch(reason=>{
                alert(reason);
            })
        }
    }
</script>

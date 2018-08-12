<template>
<d2-container>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</d2-container>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      data: [],
      defaultProps: {
        children: "children",
        label: "title"
      },
      modal1: false,
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    ok: function() {
      this.updateMenu();
    },
    cancel: function() {},
    showEdit: function(index) {
      this.index = index;
      this.modal1 = true;
    },
    deleteMenu: function(index) {
      if (confirm("你真的要删除此菜单吗？")) {
        this.$axios
          .post("http://localhost:3000/menu/del", {
            parent: this.parent,
            name: this.data4[index].name
          })
          .then(res => {
            if (res.data.success) {
              alert("删除菜单成功！");
              this.readMenu(this.parent);
              this.$store.commit("updateMenuList");
            } else {
              alert(res.data.message);
            }
          })
          .catch(err => {
            alert(err.message);
          });
      }
    },
    updateMenu: function() {
      var data = {
        parent: this.parent,
        name: this.data4[this.index].name,
        title: this.data4[this.index].title,
        path: this.data4[this.index].path,
        icon: this.data4[this.index].icon
      };
      this.$axios
        .post("http://localhost:3000/menu/edit", data)
        .then(res => {
          if (res.data.success) {
            alert("修改成功");
            this.readMenu(this.parent);
            this.$store.commit("updateMenuList");
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          alert(err.message);
        });
    },
    readMenu: function() {
      let url = "http://localhost:3000/menu";

      this.$axios
        .get(url)
        .then(res => {
          if (res.data.success) this.data = res.data.result;
          else alert(res.data.message);
        })
        .catch(err => {
          alert(err.message);
        });
    }
  },
  mounted: function() {
    this.readMenu();
  }
};
</script>
<style lang="less">
.head {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
import Vue from 'vue'

import MyForm from './form'
import MyTable from './table'
import MyToolbar from './toolbar'
import MyTree from './tree'

//引入基础控件
import './base-components'

Vue.component('my-form',MyForm)
Vue.component('my-table',MyTable)
Vue.component('my-toolbar',MyToolbar)
Vue.component('my-tree',MyTree)
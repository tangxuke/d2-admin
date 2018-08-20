import Vue from 'vue'

import WiseMisModal from './wisemis-modal'
import SelectDepartmentModal from './select-department-modal'
import SelectTeacherModal from './select-teacher-modal'

Vue.component('wisemis-modal',WiseMisModal)     //基础模态框，所有模态框都以这个为基础
Vue.component('select-department-modal',SelectDepartmentModal)  //选择部门模态框
Vue.component('select-teacher-modal',SelectTeacherModal)    //选择老师模态框
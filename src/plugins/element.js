// import ElementPlus from 'element-plus'
// import * as icons from '@element-plus/icons-vue'
import {
  ElAffix,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElPageHeader,
  ElButton,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElTree,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElForm,
  ElFormItem,
  ElInput,
  ElTooltip,
  ElPopper,
  ElRow,
  ElCol,
  ElCard,
  ElScrollbar,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElImage,
  ElSelect,
  ElOption,
  ElDialog,
  ElRadioGroup,
  ElRadio,
  ElRadioButton,
  ElDrawer,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopconfirm,
  ElAlert,
  ElAvatar,
  ElCollapse,
  ElCollapseItem,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElColorPicker
} from 'element-plus'
import { Close, Tools } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import store from '@/store'

const components = [
  ElAffix,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElPageHeader,
  ElButton,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElTree,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElForm,
  ElFormItem,
  ElInput,
  ElTooltip,
  ElPopper,
  ElRow,
  ElCol,
  ElCard,
  ElScrollbar,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElImage,
  ElSelect,
  ElOption,
  ElDialog,
  ElRadioGroup,
  ElRadio,
  ElRadioButton,
  ElDrawer,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopconfirm,
  ElAlert,
  ElAvatar,
  ElCollapse,
  ElCollapseItem,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElColorPicker,
  // 以下是icon图标
  Tools,
  Close
]

export default (app) => {
  // app.use(ElementPlus, { locale: store.getters.language === 'en' ? en : zhCn })
  // console.log(ElementPlus, icons)
  // console.log(Object.keys(icons))
  // Object.keys(icons).forEach((key) => {
  //   app.component(key, icons[key])
  // })
  app.use({ locale: store.getters.language === 'en' ? en : zhCn })
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

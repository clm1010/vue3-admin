<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFromRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <language-select class="language-select"></language-select>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <!-- <el-icon>
            <Avatar />
          </el-icon> -->
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <!-- <el-icon>
            <Lock />
          </el-icon> -->
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          name="password"
          :type="passwordType"
        ></el-input>
        <span class="show-pwd">
          <!-- <el-icon>
            <View />
          </el-icon> -->
          <span class="svg-container" @click="onChangePwdType">
            <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            ></svg-icon>
          </span>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px;"
        :loading="loading"
        @click="handlerLogin"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { useI18n } from 'vue-i18n'
import { validateUsername, validatePassword } from './rules'
import LanguageSelect from '@/components/LanguageSelect'

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 验证规则
// const i18n = useI18n()
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      // message: i18n.t('msg.login.usernameRule')
      validator: validateUsername()
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 处理密码框文本显示
const passwordType = ref('password')
// template 中绑定的方法，直接声明即可
const onChangePwdType = () => {
  // 当 passwordTYpe 的值位 password 的时候，改为 text
  // 使用 ref 声明的数据，在 script 中使用时，需要加 value 来获取具体的值，但是在 template 中使用的时候，不需要加 value
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录
const loading = ref(false)
const store = useStore()
// ref(null)传入null 就会到当期去找有没有对应的ref实例
const loginFromRef = ref(null)
const handlerLogin = () => {
  // 1. 进行表单校验
  // console.log(loginFromRef.value)
  loginFromRef.value.validate((valid) => {
    if (!valid) return
    // 2. 触发登录动作
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
        // TODO: 3. 进行登录后处理
      })
      .catch((err) => {
        console.error(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        box-shadow: none;
      }
    }
  }
  .tips {
    text-align: left;
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  ::v-deep .language-select {
    position: absolute;
    top: 4px;
    right: 0;
    background-color: #ffffff;
    font-size: 22px;
    padding: 4px;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>

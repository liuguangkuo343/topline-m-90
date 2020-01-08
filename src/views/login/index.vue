<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"

      />

      <van-field v-model="password" type="password" label="验证码" placeholder="请输入验证码" required >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>
    </van-cell-group>
    <div><van-button type="info">信息按钮</van-button>
</div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
</style>

<style scoped>
  .login{
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #0099c3;
  }
  
  .login-box{
    margin: auto;
    width: 420px;
    height: 300px;
  }
  .login-box-title{
    margin-bottom: 20px;
    font-size: 24px;
    color: #fff;
  }
  .login-box-button{
    width: 100%;
  }
</style>
<template>
  <div class="login">
   
    <div class="login-box">
      <h2 class="login-box-title">登录</h2>
      <el-form :model="login" :rules="rules" ref="login">
        <el-row type="flex">
          <el-col :span="18">
            <el-form-item prop="username">
              <el-input v-model="login.username" size="large" placeholder="用户名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="18">
            <el-form-item prop="password">
              <el-input v-model="login.password" size="large" placeholder="密码" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
      </el-form>
      <el-row type="flex">
        <el-col :span="18">
          <el-button class="login-box-button" type="primary" :loading="loading" @click="loginSubmit">
            登录
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  
  import util from '../../assets/js/util'
  export default{
    data(){
      return {
        login: {
          username: '',
          password: '',
          captcha: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
        },
        loading: false
      }
    },
    methods: {
      loginSubmit(){
        this.loading = true
        setTimeout(()=>{
          util.authcode='123456'
          util.setSession('authcode',util.authcode)
          this.$router.push('/monitor/serverlist')
          this.loading = true
        },1500)
      }
    },
    
  }
</script>


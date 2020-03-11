<template>
  <!--  登陆组件-->
  <div class="login_container">
    <!--    登录框-->
    <div class="login_box">
      <!--      头像框-->
      <div class="avatar_box">
        <img :src="url" alt="">
      </div>
      <!--      表单域-->
      <div>
        <el-form ref="form" :model="form" label-width="0px"
                 :rules="formRules" class="login_Form">
          <!--        用户名-->
          <el-form-item prop="username">
            <el-input v-model="form.username"
                      prefix-icon="iconfont icon-user">
            </el-input>
          </el-form-item>
          <!--        密码-->
          <el-form-item prop="password">
            <el-input v-model="form.password"
                      prefix-icon="iconfont icon-password">
            </el-input>
          </el-form-item>
          <!--        按钮-->
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      url: require('../assets/img/bd1.png'),
      form: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          { required: true, message: '要输入用户名哦', trigger: 'blur' },
          { min: 2, max: 6, message: '长度要在 2 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码哦', trigger: 'blur' },
          { min: 6, message: '密码至少6位哦', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 这部分代码适用于和后端交互
    // 会存下token，并阻止未登录状态访问其他页面
    // login () {
    //   this.$refs.form.validate(async valid => {
    //     if (!valid) return null
    //     var { data: res } = await this.$axios.post('login', this.form)
    //     if (res.meta.status !== 200) return this.$message.error('登陆失败了...')
    //     this.$message.success('登陆成功！')
    //     window.sessionStorage.setItem('token', res.data.token)
    //     this.$router.push('/home')
    //   })
    // },
    login () {
      this.$refs.form.validate(valid => {
        if (!valid) return null
        const username = this.form.username
        const password = this.form.password
        if (username !== 'bding' || password !== '1111111') {
          this.$message.error('登陆失败了。。刚刚说错了，密码其实是7个1哦')
          this.url = require('../assets/img/bd2.png')
        } else {
          this.$message.success('登陆成功！')
          this.$router.push('/home')
        }
      })
    },
    reset () {
      this.$refs.form.resetFields()
    }
  },
  mounted () {
    this.$notify({
      title: '布丁说：',
      message: `用户名：bding，密码：111111，本来我是要向后台发数据的，
      但主人说为了方便演示就改成简单的数据验证啦！原本我会存下token然后和导航守卫一起看门的哦，
      主人还说原本的代码就藏在注释里，默默等着后台接口的出现！`,
      duration: 0,
      offset: 150
    })
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    background: url("../assets/img/f5q9.jpg") no-repeat fixed ;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background: #ffffff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;

    .avatar_box {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      padding: 10px;
      border: 1px solid #eeeeee;
      box-shadow: 0 0 10px #dddddd;
      background: #ffffff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }
    }
  }

  .el-form {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: absolute;
    bottom: 0;

    button {
      float: right;
      margin-left: 20px;
    }
  }
</style>

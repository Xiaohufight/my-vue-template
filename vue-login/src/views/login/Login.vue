<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 380px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input
                v-model="user.username"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user-solid"
              />
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td style="display:flex">
              <el-input
                  :type="passwordType"
                   v-model="user.password"
                   placeholder="请输入密码"
                   @keydown.enter.native="doLogin"
                   prefix-icon="el-icon-user-solid"
               >
                   <i slot="suffix" :class="[passwordType === 'password' ?'el-icon-minus':'el-icon-view']" style="margin-top:8px;font-size:18px;" autocomplete="auto" @click="showPassword"/>
              </el-input>
            </td>
          </tr>
          </br>
          <tr>
            <!-- 占两行-->
            <Vcode :show="isShow" @success="success" @close="close" />
            <td colspan="2">
              &emsp;<el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";

export default{
  data(){
    return{
        user:{
            username:'admin',
            password:'123456'
        },
        isShow: false,
        passwordType: 'password'
     }
  },
  components: {
      Vcode,
  },
  methods:{
      doLogin(){
          this.isShow = true;
      },
      success(msg) {
          this.isShow = false;
          if(this.user.username==="admin"&&this.user.password=="123456"){
                this.$store.dispatch("userLogin", true);
                localStorage.setItem("Flag","isLogin");
                this.$router.push("/index");
           }
           else{
                alert("账户或密码不正确")
           }
      },
      close() {
          this.isShow = false;
      },
      showPassword(){
        if(this.passwordType=="password"){
          this.passwordType=""
        }
        else{
          this.passwordType="password"
        }
      }
  }
}
</script>

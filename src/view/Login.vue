<template>
	<div class="login">
		<h1>
			<a href="">取消</a>
			登录豆瓣
		</h1>
		<form class="form" >
				<div >
					<input type="text" placeholder="邮箱 / 手机号 / 用户名" v-model="username">
				</div>
				<div class="password">
					<input type="password" placeholder="请输入密码" v-model="password">
					<span></span>
				</div>
				<div class="down">
	        		<button @click="onSubmit">登录</button>
	        		<p>使用其他方式登录 & 找回密码</p>
        	    </div>

		</form>
		<div class="btns">
        <router-link :to="{name: 'Register'}">注册豆瓣帐号</router-link>
        <a href="https://www.douban.com/doubanapp/card/log?category=book_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1">下载豆瓣App</a>
         </div>        
	</div>
</template>

<script>
	export default{
		name:'login',
        data(){
            return{
               username:'',
               password:''
            }
        },
        methods:{
            onSubmit(){
                var _this=this;
                console.log(_this.username)
                console.log(_this.password)
                $.ajax({
                    url:'http://127.0.0.1:3000/users/login',
                    type:'post',
                    data:{
                        username:_this.username,
                        password:_this.password
                    },
                    success:function(data){
                        alert(data)
                         location.href='http://localhost:1019/#/'                       
                    },
                    error:function(){
                        alert('失败')
                    }
                })

             }
        }
	}
</script>

<style scoped>
.login{

    height: 100%;
    position: absolute;
    bottom: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
}
.login h1{
	    background: #fff;
	    height: 45px;
	    border-bottom: 1px solid #eee;
	    padding: 0 18px;
	    text-align: center;
	    font-size: 18px;
	    font-weight: bold;
	    line-height: 45px;
        margin: 0 0 10px 0;
}
.login h1 a{
	font-size: 15px;
    font-weight: normal;
    position: absolute;
    left: 18px;
    top: 0;
}
.login .form{
	padding:15px;
}

.login input{
	display: inline-block;
    width: 100%;
    height: 4.4rem;
    padding: 0 0.8rem;
    box-sizing: border-box;
    font-size: 1.5rem;
    background: #fff;
    border: 0.1rem solid #ccc;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    outline: 0;
}
.login div{
	position: relative;
}
.password span{
	background: url('../assets/eye.png') no-repeat;
	background-size: 18px 18px;
    padding: 0;
    top: 16px;
    right: 10px;
    height: 18px;
    width: 18px;
    text-indent: -999em;
    overflow: hidden;
    display: block;
    font-size: 13px;
    position: absolute;
}
.down{
	    margin-top: 10px;
}
.down button{
	font-size: 16px;
    border-radius: 3px;
    border: 0 none;
    background: #42bd56;
    display: block;
    width: 100%;
    height: 44px;
    color: #fff;
    transition: all 0.3s ease-out;
}
.down p{
	    font-size: 14px;
    color: #ccc;
    text-align: center;
}
.btns {
      text-align: center;
      font-size: 1.5rem;}

     .btns a {
        color: #42bd56;
        margin-right: 1.5rem;
        display: inline-block;
      }
</style>
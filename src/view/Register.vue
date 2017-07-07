<template>
	<div class="register">
		<h1>欢迎加入豆瓣</h1>
        <form  class="form" >
        	<div class="input">
        		<input type="text"placeholder="手机号/邮箱" class="bg" v-model="email" />
        	</div>
        	<div class="input password">
        		<input type="password" placeholder="密码" class="bg"v-model="password"/>
        		<span></span>
        	</div>
        	<div class="input">
        		<input type="name"placeholder="昵称" v-model="username"/>
        	</div>
        	<div class="down">
        		<button @click='onSubmit()'>下一步</button>
        		<p>
        			<span>点击「下一步」代表你已阅读并同意</span>
        			<a href="https://accounts.douban.com/app/agreement">用户使用协议</a>
        		</p>
        	</div>
        </form>
        <a href="https://www.douban.com/doubanapp/card/log?category=book_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1" class="open">下载豆瓣APP</a>
	</div>
</template>
<script>
	export default{
		name:'register',
        data(){
            return{
             arr:{},
             email:'',
             username:'',
             password:''

            }
        },
        methods:{
            onSubmit(){
                var _this=this;
                $.ajax({
                    url:'http://127.0.0.1:3000/users/register',
                    type:'post',
                    data:{
                        username:_this.username,
                        email:_this.email,
                        password:_this.password
                    },
                    success:function(data){
                        
                            location.href='http://localhost:1019/#/login'
                        
                    }
                })
               
          }
        }
	}
</script>
<style scoped>
	.register{
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
.register h1{
	margin: 10% 0 9%;
    font-size: 4rem;
    font-weight: 300;
    color: #42bd56;
    text-align: center;
}
.form{
	padding: 20px;
}
.register div{
	border-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
     
}
.register .input{
	color: #494949;
    height: 44px;
    background: #fff;
    border: 1px solid #d7d7d7;
    overflow: hidden;
}
.register input{
	border: 0 none;
    width: 96%;
    background: #fff;
    height: 30px;
    line-height: 30px;
    padding: 0 0 0 10px;
    margin-top: 7px;
    outline: 0;
}
.register .bg{
	    background-color: rgb(250, 255, 189);
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
.down p a{
	    text-decoration: underline;
	     color: #ccc;
	     display: inline-block;
}
.open{
	display: block;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #42bd56;
}
</style>
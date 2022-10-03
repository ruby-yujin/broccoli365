<template>
  <div class="h-screen max-w-md mx-auto flex justify-center guide-line">
    <div class="relative login-wrap text-center">
      <button class="absolute flex items-center justify-center btn-close">
        <svg width="32" height="32" viewBox="0 0 512 512">
          <path
            d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
            fill="currentColor"
          />
        </svg>
      </button>
      <img
        src="/images/login_logo.png"
        alt=""
        class="block mx-auto login-logo"
      />
      <h2 class="login-title">로그인 정보를 입력하세요.</h2>

      <form action="">
        <div class="login-form">
          <input type="text" placeholder="Email 주소 입력" class="w-full" />
          <input type="text" placeholder="비밀번호 입력" class="w-full" />
        </div>
      </form>
      <div class="flex items-center justify-center find-userInfo">
        <a href="" class="find">아이디 찾기</a>
        <a href="" class="find">비밀번호 찾기</a>
      </div>
      <div class="login-btn-wrap">
        <button class="rounded-full btn-login mx-auto">로그인</button>
        <button class="rounded-full btn-login sign-up mx-auto">회원가입</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.guide-line {
  border: 1px solid #eee;
}
.login-wrap {
  margin: 180px 0 0;
}
.btn-close {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  right: 0px;
  top: 50px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  color: #3d95ff;
  top: -150px;
  right: 10px;
}
.login-logo {
  width: 195px;
}
.login-title {
  font-size: 25px;
  font-weight: bold;
  line-height: 1.16;
  color: #555;
  margin: 50px 0 35px;
}
.login-form {
  width: 80%;
  margin: 0 auto;
}
.login-form input {
  text-align: center;
  height: 50px;
  border-bottom: 2px solid #3d95ff;
}

.find-userInfo {
  margin: 20px auto;
  gap: 0 40px;
}
.find-userInfo a {
  display: flex;
  font-size: 17px;
  line-height: 1.47;
  color: #848484;

  &:first-child {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 4px;
      right: -20px;
      width: 1px;
      height: 15px;
      background-color: #848484;
    }
  }
}

.login-btn-wrap {
  padding: 4rem 0;
  .btn-login {
    width: 80%;
    display: block;
    height: 70px;
    margin: 0 auto;
    background-color: #6cc902;
    color: #fff;
    font-size: 22px;
    &.sign-up {
      margin-top: 10px;
      background-color: #3d95ff;
    }
  }
}
</style>

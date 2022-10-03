<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <img src="/images/icon_smile.png" alt="" class="block mx-auto" />
      <h2 class="title text-center mx-auto">
        Enter the verification code You have just received by Text message
      </h2>
      <form action="">
        <div class="user-info">
          <input type="text" value="0" />
          <span class="timer">02:32</span>
        </div>
      </form>
    </div>
    <div class="btn-wrap">
      <button class="rounded-full btn-prev">Prev</button>
      <button class="rounded-full btn-next">Next</button>
    </div>
  </div>
</template>

<style lang="scss">
.guide-line {
  border: 1px solid #eee;
}
.title {
  width: 90%;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.13;
  color: #555;
  margin: 30px auto 40px;
}
.user-info {
  text-align: center;
  input {
    text-align: center;
    height: 50px;
    border-bottom: 2px solid #3d95ff;
    color: #555;
    font-size: 20px;
  }
  .timer {
    margin-top: 2rem;
    display: block;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    letter-spacing: -0.36px;
    color: #3d95ff;
  }
}
.btn-wrap {
  width: 90%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
}
.btn-prev {
  width: 30%;
  height: 70px;
  font-size: 22px;
  font-weight: 500;
  color: #717171;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-next {
  width: 69%;
  height: 70px;
  background-color: #6cc902;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

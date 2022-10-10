<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <img src="/images/icon_smile.png" alt="" class="block mx-auto" />
      <h2 class="title text-center mx-auto">Enter your cell phone number</h2>
      <form action="">
        <div class="user-info">
          <input type="text" value="0" class="w-full" />
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
  flex-wrap: wrap;
}
.wrap {
  width: 85%;
  margin: 0 auto;
}
.title {
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
}
.btn-wrap {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  margin-top: auto;
  gap: 0 10px;
  background: #fff;
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

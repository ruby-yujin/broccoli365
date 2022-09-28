<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap">
      <img
        src="/images/nonVerify/icon_nurse.png"
        alt=""
        class="block mx-auto"
      />
      <h2 class="title text-center">Select the language.</h2>
      <button class="rounded-full btn-lang mx-auto">한국어</button>
      <button class="rounded-full btn-lang mx-auto">English</button>
    </div>
    <button class="btn-bottom max-w-md">Next</button>
  </div>
</template>

<style lang="css">
.guide-line {
  border: 1px solid #eee;
}
.title {
  font-size: 23px;
  font-weight: bold;
  line-height: 1.13;
  color: #9b9b9b;
  margin: 30px 0 40px;
}
.btn-lang {
  display: block;
  width: 228px;
  height: 60px;
  border: solid 1px #3d95ff;
  color: #3d95ff;
  font-size: 22px;
  font-weight: bold;
}
button + button {
  margin: 10px;
}

.btn-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  background-color: #6cc902;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
</style>

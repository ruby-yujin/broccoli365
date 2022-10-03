<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <img src="/images/icon_smile.png" alt="" class="block mx-auto" />
      <h2 class="title text-center mx-auto">How tall are you?</h2>
      <form action="">
        <div class="user-info">
          <input type="text" placeholder="175" />
          <span class="unit">Cm</span>
        </div>
        <div class="radio-wrap">
          <span class="rounded-full btn-height active">Cm</span>
          <span class="rounded-full btn-height">Feet</span>
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
  position: relative;
  input {
    text-align: center;
    height: 50px;
    border-bottom: 2px solid #3d95ff;
    color: #555;
    font-size: 20px;
  }
  .unit {
    position: absolute;
    bottom: 0.6em;
    right: 1em;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.72px;
    color: #9a9a9a;
  }
}
.radio-wrap {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
  .btn-height {
    width: 130px;
    height: 43px;
    border: 2px solid #3d95ff;
    color: #3d95ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: #767676;
    &.active {
      background-color: #3d95ff;
      color: #fff;
    }
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

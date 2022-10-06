<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <div class="nonverify-top-slide">
        <div class="item">
          <img src="" alt="" />
          <div class="title-wrap">
            <h3>Focus! Task</h3>
            <p class="desc">
              It is 9th day of yourCare <br />plan. Get active And enjoy a
              healthy life.
            </p>
          </div>
        </div>
      </div>
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
  padding: 4rem 0 1rem;
  flex-wrap: wrap;
}
.nonverify-top-slide {
  height: 235px;
  background-color: #3c95ff;
}
.btn-wrap {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  margin-top: auto;
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

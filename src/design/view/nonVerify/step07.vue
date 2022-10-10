<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line"
  >
    <div class="wrap relative">
      <div class="nonVerify-activity-question">
        <div class="title">
          <h2>
            평소 활동량은 어디에 <br />
            가깝습니까?
          </h2>
        </div>
        <div class="activiry-question">
          <div class="item">
            가벼운 활동(거의 앉아서 일하거나 운동을 하지 않는 경우)
          </div>
          <div class="item active">
            보통 활동(서서 하는 일을 하거나 걷기, 자전거타기 등 가벼운 운동을
            정기적으로 하는경우)
          </div>
          <div class="item">
            힘든 활동(동량이 많은 일을 하거나 달리기, 수영등 강도 있는 운동을
            1주 4~5회 하는 경우)
          </div>
          <div class="item">
            가벼운 활동(거의 앉아서 일하거나 운동을 하지 않는 경우)
          </div>
          <div class="item">
            보통 활동(서서 하는 일을 하거나 걷기, 자전거타기 등 가벼운 운동을
            정기적으로 하는경우)
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
  flex-wrap: wrap;
}
.wrap {
  width: 85%;
  margin: 0 auto;
}
.nonVerify-activity-question {
  .title {
    h2 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.54px;
      color: #555;
      text-align: center;
    }
  }
  .activiry-question {
    margin: 40px 0;
    display: grid;
    gap: 10px 0;
    .item {
      border-radius: 15px;
      border-bottom-right-radius: 0;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
      max-height: 90px;
      background: #fff;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: -0.36px;
      color: #555;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 30px;
      &.active {
        background-color: #3d95ff;
        color: #fff;
      }
    }
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
  position: fixed;
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

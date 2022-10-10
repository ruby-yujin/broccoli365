<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <img
        src="/images/icon_oh.png"
        alt="icon_oh"
        class="block mx-auto top-icon-img"
      />
      <h2 class="title text-center">Select the font size.</h2>
      <div class="select-font-size">
        <div class="item active">
          <span class="icon">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4Z"
              />
            </svg>
          </span>
          <p class="text">
            <strong class="large">Large size</strong>
            To be large size
          </p>
        </div>
        <div class="item">
          <span class="icon">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 12.998H5v-2h14z" />
            </svg>
          </span>
          <p class="text">
            <strong class="md-size">Medium size</strong>
            To be medium size
          </p>
        </div>
        <p class="notice">
          You can change the font size at The top of the App: Profile > Setup >
          Font size
        </p>
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
.wrap {
  width: 85%;
  margin: 0 auto;
}
.top-icon-img {
  width: 90px;
}
.title {
  font-size: 23px;
  font-weight: bold;
  line-height: 1.13;
  color: #555;
  margin: 30px 0 40px;
}
.select-font-size {
  .item {
    border-radius: 15px;
    border: solid 1px #3d95ff;
    min-height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3d95ff;
      background-color: #d6e9ff;
      border-radius: 50%;
      margin-right: 24px;
    }
    .text {
      font-size: 16px;
      color: #555;

      strong {
        display: block;
        font-size: 28px;
        color: #555;
        font-weight: 500;
        &.md-size {
          font-size: 20px;
        }
      }
    }
    &.active {
      background-color: #3d95ff;
      .text {
        color: #fff;
        strong {
          color: #fff;
        }
      }
    }
  }
  .item + .item {
    margin: 15px 0;
  }
  .notice {
    margin-top: 35px;
    font-size: 16px;
    color: #555;
  }
}
button + button {
  margin: 10px;
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

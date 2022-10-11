<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line-03"
  >
    <div class="fulid-wrap relative">
      <div class="floating-icon">
        <img src="/images/icon_tongue.png" alt="icon" />
      </div>
      <div class="top-title">
        <h2>MESSAGE</h2>
      </div>
      <div class="message-content-bottom">
        <h3>Jul 06, 2022</h3>
        <div class="message-item">
          <p>This is test message from Junkman.</p>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m16 12l2 2v2h-5v6l-1 1l-1-1v-6H6v-2l2-2V5H7V3h10v2h-1Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="dim"></div>
    <div class="common-popup">
      <div class="popup-title">
        <h2>Inquiries</h2>
        <button class="popup-close" @click="$router.push('/')">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
            />
          </svg>
        </button>
      </div>
      <div class="popup-footer">
        <button class="w-full rounded-full btn-text" @click="$router.push('/')">
          Inquiries by phone(4085209457)
        </button>
        <button class="w-full rounded-full btn-img" @click="$router.push('/')">
          Brocoli365 Chact
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.guide-line-03 {
  border: 1px solid #eee;
  flex-wrap: wrap;
  background: #f7fbff;
}
.fulid-wrap {
  width: 100%;
}
.floating-icon {
  width: 62px;
  position: absolute;
  top: 22px;
  right: 10px;
  > img {
    width: 100%;
  }
}
.top-title {
  margin: 40px 0 20px;
  padding: 0 30px;
  h2 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.5;
    color: #6cc902;
  }
}
.message-content-bottom {
  padding: 1rem 30px;
  display: grid;
  gap: 15px 0;
  h3 {
    font-size: 25px;
    font-weight: bold;
    line-height: 1.16;
    color: #3d95ff;
  }
  .message-item {
    border-radius: 15px;
    border: solid 1px #d8d9db;
    background-color: #fff;
    min-height: 100px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.15;
      color: #555;
    }
    svg {
      color: #1c75bc;
    }
  }
}
</style>

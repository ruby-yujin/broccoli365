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
    <div class="bottom-gnb">
      <!-- TODO 보내주신 이미지 파일에 없어서 캡처로 임의 적용했습니다 -->
      <p class="aa">
        아래 아이콘 보내주신 이미지 파일에 없어서 캡처로 임의 적용했습니다
      </p>
      <ul>
        <li>
          <router-link to="/today">
            <img src="/images/icon_today.png" alt="" />
            <p>TODAY</p>
          </router-link>
        </li>
        <li>
          <router-link to="/careplan">
            <img src="/images/icon_careplan.png" alt="" />
            <p>CARE PLAN</p>
          </router-link>
        </li>
        <li>
          <router-link to="/guide">
            <img src="/images/icon_guide.png" alt="" />
            <p>GUIDE</p>
          </router-link>
        </li>

        <li>
          <router-link to="/guide">
            <img src="/images/icon_management.png" alt="" />
            <p>MANAGE</p>
          </router-link>
        </li>
        <li>
          <router-link to="/guide">
            <img src="/images/icon_message.png" alt="" />
            <p>MESSAGE</p>
          </router-link>
        </li>
      </ul>
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

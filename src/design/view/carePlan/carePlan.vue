<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line-02"
  >
    <div class="fulid-wrap relative">
      <div class="floating-icon">
        <img src="/images/icon_tongue.png" alt="icon" />
      </div>
      <div class="carePlan-page-top">
        <div class="top-title-02">
          <h2>CARE PLAN</h2>
        </div>
        <p class="carePlan-hello">
          Hello Taewoo,<br />
          Your care plan is as<br />
          follows
        </p>
        <div class="date-period">
          <h3>No 1 (JUL 06, 2022 ~ )</h3>
        </div>
      </div>
      <div class="carePlan-page-content">
        <div class="item-card">
          <router-link to="/nonVerify/">
            <h4>CARE PLAN</h4>
            <p>Diabetes and high blood pressure care plan</p>
            <span class="period">
              JUL 06, 2022 ~ 04, <br />
              AUG 2022
            </span>
            <div class="icon-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                />
              </svg>
            </div>
          </router-link>
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
.guide-line-02 {
  border: 1px solid #eee;
  flex-wrap: wrap;
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
.carePlan-page-top {
  height: 330px;
  background-color: #3c95ff;
  padding: 2.5rem 2rem 1rem;

  .top-title-02 {
    h2 {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.18;
      color: #8f0;
    }
  }
  .carePlan-hello {
    font-size: 27px;
    font-weight: bold;
    line-height: 0.93;
    color: #fff;
    font-family: 'Noto Sans';
    margin-top: 13px;
  }
  .date-period {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 15px;
    background: #fff;
    margin-top: 30px;
    box-shadow: 0 0 10px 0 rgb(6 44 90 / 12%);
    padding: 0 1rem;
    h3 {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.15;
      color: #555;
      text-align: center;
      position: relative;
    }
  }
}
.carePlan-page-content {
  height: 100%;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding: 2rem 30px;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  .item-card {
    width: 100%;
    min-height: 210px;
    border-radius: 15px;
    border: solid 1px #d8d9db;
    background-color: #fff;
    padding: 20px 25px;
    position: relative;
    h4 {
      font-size: 25px;
      font-family: 'Noto Sans';
      font-weight: bold;
      line-height: 1.15;
      color: #3d95ff;
    }
    p {
      margin: 20px 0;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.18;
      color: #555;
    }
    .period {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.18;
      color: #b9b9b9;
    }
    .icon-arrow {
      position: absolute;
      top: 16px;
      right: 10px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
      svg {
        color: #3d95ff;
      }
    }
  }
}
.bottom-gnb {
  max-width: 446px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background: #fff;
  border-top-left-radius: 30px;
  box-shadow: 0 -3px 6px 0 rgb(0 0 0 / 16%);
  .aa {
    color: red;
    position: absolute;
    top: 2px;
    left: 10px;
    font-size: 11px;
  }
  ul {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    li {
      img {
        width: 55px;
        margin: 0 auto;
      }
      p {
        margin-top: 10px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.17;
        color: #555;
        text-align: center;
      }
    }
  }
}
</style>

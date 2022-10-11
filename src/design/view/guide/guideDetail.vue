<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative detail-guide-line"
  >
    <div class="wrap relative">
      <div class="guide-detail-content">
        <div class="guide-detail-top">
          <div class="title-wrap">
            <router-link to="/carePlan/carePlan">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </svg>
            </router-link>
            <h2>Guide Details</h2>
          </div>
          <div class="detail-date">2022-07-08 ~ 2022-08-04</div>
        </div>
        <div class="guide-detail-bottom">
          <div class="slide"></div>
          <div class="guide-text">
            <div class="icon-heart">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                />
              </svg>
            </div>
          </div>
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
.detail-guide-line {
  padding: 2rem 0 1rem;
  border: 1px solid #eee;
  flex-wrap: wrap;
}
.wrap {
  width: 85%;
  margin: 0 auto;
}
.guide-detail-content {
  //  width: 80%;
  // margin: 0 auto;
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #3d95ff;
    text-align: center;
  }
  .guide-detail-top {
    .title-wrap {
      border-bottom: solid 2px #6cc902;
      position: relative;
      padding: 3px 0 16px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        svg {
          color: #3d95ff;
        }
      }
      h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.18;
        color: #555;
      }
    }
    .detail-date {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      line-height: 1.11;
      color: #79818b;
      border-bottom: solid 1px #e6e6e6;
    }
  }
  .guide-detail-bottom {
    padding: 1rem 0;
    .guide-title {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.15;
      color: #3d95ff;
    }
    .guide-text {
      margin-top: 40px;
      .icon-heart {
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #6cc902;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          color: #fff;
        }
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

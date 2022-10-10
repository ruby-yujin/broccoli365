<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line-02"
  >
    <div class="fulid-wrap relative">
      <div class="floating-icon">
        <img src="/images/icon_tongue.png" alt="icon" />
      </div>
      <div class="nonVerify-top-slide">
        <div class="item">
          <!-- [TODO 보내주신 이미지가 사이즈가 잘못됬습니다. 제가 임의 적용할테니 정방형 88px 로 변경필요합니다.] -->
          <div class="img-wrap">
            <img src="/images/icon_haha_new.png" alt="icon haha" />
          </div>

          <div class="title-wrap">
            <h3>Focus! Task</h3>
            <p class="desc">
              It is 9th day of yourCare <br />plan. Get active And enjoy a
              healthy life.
            </p>
          </div>
        </div>
      </div>
      <div class="nonVerify-guide-content">
        <div class="item-card">
          <router-link to="/nonVerify/">
            <span>Nutrition Guide</span>
            <h4>
              HEALTH RED LIGHT, HIGH<br />
              BLOOD PRESSURE
            </h4>
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
        <div class="item-card-graph"></div>
        <div class="item-card-graph"></div>
        <div class="item-card-half">
          <!-- TODO 전해주신 디자인 xd, 제플린만으로는 가려진 컨텐츠가 보여서 작업할수가 없습니다.  -->
          <div class="item-card-half-inner active">
            <h4>Nutrition</h4>
          </div>
          <div class="item-card-half-inner">
            <!-- TODO 디폴트일때 텍스트 컬러값이 .active 일때랑 동일하게 잡혀서 컬러값 임의 적용했습니다  -->
            <h4>Medication</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrap-bottom">
      <button class="rounded-full btn-next">Next</button>
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
.nonVerify-top-slide {
  height: 270px;
  background-color: #3c95ff;
  padding: 2.5rem 2rem 1rem;
  .item {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    .img-wrap {
      width: 88px;
      margin-right: 20px;
      > img {
        width: 100%;
      }
    }
    .title-wrap {
      h3 {
        font-size: 26px;
        font-weight: bold;
        line-height: 1.14;
        color: #8f0;
        margin-bottom: 8px;
      }
      .desc {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.11;
        color: #fff;
      }
    }
  }
}
.nonVerify-guide-content {
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
    min-height: 120px;
    border-radius: 15px;
    background-color: #d6e9ff;
    padding: 20px 25px 0;
    position: relative;
    span {
      display: block;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.11;
      color: #555;
      margin-bottom: 18px;
    }
    h4 {
      font-size: 20px;
      font-family: 'Noto Sans';
      font-weight: bold;
      line-height: 1.15;
      color: #3d95ff;
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
      svg {
        color: #3d95ff;
      }
    }
  }
  .item-card-graph {
    width: 100%;
    min-height: 120px;
    border-radius: 15px;
    background-color: #ddd;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  }
  .item-card-half {
    display: flex;
    justify-content: center;
    gap: 0 15px;
    .item-card-half-inner {
      width: calc((100% - 15px) / 2);
      border-radius: 15px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
      background-color: #fff;
      min-height: 160px;
      padding: 0 16px;
      &.active {
        h4 {
          color: #555;
        }
      }
      h4 {
        margin-top: 30px;
        font-size: 18px;
        line-height: 1.5;
        color: #b4b4b4;
      }
    }
  }
}
.btn-wrap-bottom {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  .btn-next {
    width: 100%;
    height: 70px;
    background-color: #6cc902;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

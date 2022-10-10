<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line-02"
  >
    <div class="fulid-wrap relative">
      <div class="floating-icon">
        <img src="/images/icon_tongue.png" alt="icon" />
      </div>
      <div class="nonVerify-top-slide height-240">
        <div class="top-title-02">
          <h2>MANAGENENT</h2>
        </div>
        <div class="date-slide">
          <button>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
              />
            </svg>
          </button>
          <h3>
            14, Jan
            <a href=""
              ><svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                /></svg
            ></a>
          </h3>
          <button>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
              />
            </svg>
          </button>
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
    <div class="btn-wrap-popup">
      <button class="rounded-full">
        1 Tails left
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
          />
        </svg>
      </button>
    </div>
    <div class="btn-wrap-bottom">
      <button class="rounded-full btn-next">AUTH</button>
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
  &.height-240 {
    height: 240px;
  }
  .top-title-02 {
    h2 {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.18;
      color: #8f0;
    }
  }
  .date-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    border-radius: 15px;
    background: #fff;
    margin-top: 30px;
    box-shadow: 0 0 10px 0 rgb(6 44 90 / 12%);
    padding: 0 1rem;
    button {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #d6e9ff;
      > svg {
        color: #3c95ff;
      }
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.15;
      color: #555;
      text-align: center;
      position: relative;
      a {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: -20px;
        display: block;
        width: 20px;
        svg {
          font-size: 11px;
        }
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
  height: calc(100vh - 220px);
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
.btn-wrap-popup {
  position: fixed;
  bottom: 100px;
  button {
    width: 163px;
    height: 50px;
    background-color: #6cc902;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #fff;
      color: #6cc902;
      margin-left: 10px;
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

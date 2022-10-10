<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line-03"
  >
    <div class="fulid-wrap relative">
      <div class="floating-icon">
        <img src="/images/icon_tongue.png" alt="icon" />
      </div>
      <div class="top-title">
        <h2>GUIDE</h2>
      </div>
      <ul class="common-style-tab">
        <li class="active"><a href="">All</a></li>
        <li><a href="">Disease</a></li>
        <li><a href="">Nutrition</a></li>
        <li><a href="">Exercise</a></li>
      </ul>
      <div class="nonVerify-guide-accordion">
        <div class="accordion-item">
          <div class="top">
            <span class="weeks">1W</span>
            <h4>Proper understanding ofDiabetes and high blood pressure</h4>
            <div class="icon-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"
                />
              </svg>
            </div>
          </div>
          <div class="bottom">
            <div class="accordion-text">
              Why High Blood Pressure is Dangerous?
            </div>
            <div class="accordion-text">
              How to Properly Control Sodium Intake
            </div>
            <div class="accordion-text mb-0">
              Meal Routines/Habits for Blood Glocose Control
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="top">
            <span class="weeks">2W</span>
            <h4>Healthy weight control</h4>
            <div class="icon-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="top">
            <span class="weeks">3W</span>
            <h4>Personalized list plan</h4>
            <div class="icon-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </div>
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
.common-style-tab {
  width: calc(100% - 60px);
  height: 46px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(6, 44, 90, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    width: 25%;
    position: relative;

    &:after {
      content: '';
      width: 1px;
      height: 15px;
      background: #ddd;
      margin-top: 4px;
      position: absolute;
      top: 0;
      right: 0;
    }
    &:last-child {
      &:after {
        content: none;
      }
    }
    a {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 500;
      color: #555;
      justify-content: center;
      padding: 0 9px;
    }
    &.active {
      &:after {
        content: none;
      }
      a {
        width: 83%;
        border-radius: 10px;
        background-color: #3d95ff;
        color: #fff;
        height: 36px;
        margin: 0 auto;
      }
    }
  }
}
.nonVerify-guide-accordion {
  padding: 1rem 30px;
  display: grid;
  gap: 15px 0;
  .accordion-item {
    width: 100%;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(6, 44, 90, 0.12);
    padding: 15px 20px;

    .top {
      position: relative;
      display: flex;

      justify-content: space-between;
      .weeks {
        width: 48px;
        display: block;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.13;
        letter-spacing: normal;
        text-align: left;
        color: #3d95ff;
        position: relative;
        &:after {
          content: '';
          width: 15px;
          height: 2px;
          background-color: #3d95ff;
          position: absolute;
          top: 10px;
          right: 3px;
        }
      }
      h4 {
        font-family: NotoSansCJKsc;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.2;
        color: #555;
        margin: 0 0.5rem;
      }
      .icon-arrow {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #d8eaff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        svg {
          color: #3d95ff;
        }
      }
    }
    .bottom {
      margin-top: 1rem;
      display: grid;
      gap: 15px 0;
      .accordion-text {
        min-height: 95px;
        border-radius: 15px;
        background-color: #d8eaff;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.11;
        color: #555;
        display: flex;
        align-items: center;
        padding: 0 20px;
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

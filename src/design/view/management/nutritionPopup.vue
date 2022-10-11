<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative management-guide-line"
  >
    <div class="wrap relative">
      <div class="management-detail-content">
        <div class="management-detail-top">
          <div class="title-wrap">
            <router-link to="/management/index">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </svg>
            </router-link>
            <h2>Nutrition</h2>
          </div>
          <ul class="common-style-tab half">
            <li class="active"><a href="">Daily</a></li>
            <li><a href="">Weekly</a></li>
          </ul>
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
        <div class="management-detail-bottom">
          <div class="item-nutrition">
            <h3>Breakfast</h3>
            <router-link to="/">
              <img src="/images/icon_pencil.png" alt="" />
            </router-link>
          </div>
          <div class="item-nutrition">
            <h3>Morning Snack</h3>
            <router-link to="/">
              <img src="/images/icon_pencil.png" alt="" />
            </router-link>
          </div>
          <div class="item-nutrition">
            <h3>Lunch</h3>
            <router-link to="/">
              <img src="/images/icon_pencil.png" alt="" />
            </router-link>
          </div>
          <div class="item-nutrition">
            <h3>Afternoon Snack</h3>
            <router-link to="/">
              <img src="/images/icon_pencil.png" alt="" />
            </router-link>
          </div>
          <div class="item-nutrition">
            <h3>Dinner</h3>
            <router-link to="/">
              <img src="/images/icon_pencil.png" alt="" />
            </router-link>
          </div>
          <div class="item-nutrition">
            <h3>Midnight Snack</h3>
            <router-link to="/">
              <img src="/images/icon_pencil.png" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="dim"></div>
    <div class="common-popup">
      <div class="popup-title">
        <h2>Do you want to add Meal? <br /><span>(Breakfast)</span></h2>
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
          Add in text
        </button>
        <button class="w-full rounded-full btn-img" @click="$router.push('/')">
          Add in image
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dim {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background: rgba(0, 0, 0, 0.4);
}
.common-popup {
  border-top-left-radius: 50px;
  min-height: 230px;
  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding: 2rem 25px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  max-width: 446px;
  .popup-title {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    h2 {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.15;
      color: #555;
      span {
        color: #3d95ff;
      }
    }
    .popup-close {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: #3c95ff;
      }
    }
  }
  .popup-footer {
    padding: 20px 0 0;
    .btn-text {
      border: 1px solid #3d95ff;
      color: #3c95ff;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.15;
      color: #3d95ff;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn-img {
      background: #6cc902;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.15;
      color: #fff;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
  }
}

.management-guide-line {
  padding: 2rem 0 1rem;
  border: 1px solid #eee;
  flex-wrap: wrap;
  background: #f7fbff;
}
.wrap {
  width: 85%;
  margin: 0 auto;
}
.management-detail-content {
  //  width: 80%;
  // margin: 0 auto;
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #3d95ff;
    text-align: center;
  }
  .management-detail-top {
    .title-wrap {
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
    .common-style-tab {
      width: 100%;
      height: 46px;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(6, 44, 90, 0.12);
      display: flex;
      justify-content: center;
      align-items: center;
      &.half {
        li {
          width: 50%;
        }
      }
      li {
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
    .date-slide {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 75px;
      border-radius: 15px;
      background: #fff;
      margin-top: 15px;
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
  .management-detail-bottom {
    padding: 1rem 0;
    .item-nutrition {
      min-height: 60px;
      border-radius: 15px;
      box-shadow: 0 0 10px 0 rgba(6, 44, 90, 0.12);
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 0 20px;
      h3 {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.15;
        color: #555;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        > img {
          width: 100%;
        }
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

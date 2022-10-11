<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative detail-guide-line"
  >
    <div class="wrap relative">
      <div class="setting-detail-content">
        <div class="setting-detail-top">
          <div class="title-wrap">
            <router-link to="">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </svg>
            </router-link>
            <h2>Alam setting</h2>
          </div>
        </div>
        <div class="setting-detail-bottom">
          <div class="alarm-setting">
            <button class="item mb-3" @click="$router.push('/')">
              <input type="checkbox" hidden />
              <span class="icon">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z"
                  />
                </svg>
              </span>
              <p class="text">Healthcare service</p>
            </button>
            <button class="item mb-3 active" @click="$router.push('/')">
              <input type="checkbox" hidden />
              <span class="icon">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm5.6-5.225q.2 0 .375-.062q.175-.063.325-.213l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275L10.6 13.4l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.5q.15.15.325.213q.175.062.375.062Z"
                  />
                </svg>
              </span>
              <p class="text">Special events</p>
            </button>
            <p class="notice">
              You can change the font size at The top of the App: Profile >
              Setup > Font size
            </p>
          </div>
        </div>
      </div>
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
.setting-detail-content {
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #3d95ff;
    text-align: center;
  }
  .setting-detail-top {
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
  .setting-detail-bottom {
    padding: 1rem 0;
    .alarm-setting {
      .item {
        width: 100%;
        border-radius: 15px;
        border: solid 1px #3d95ff;
        min-height: 80px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #555;
        svg {
          color: #3d95ff;
        }
        &.active {
          background: #3d95ff;
          color: #fff;
          svg {
            color: #fff;
          }
        }
        .text {
          margin-left: 10px;
        }
      }
      .notice {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.39;
        color: #555;
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

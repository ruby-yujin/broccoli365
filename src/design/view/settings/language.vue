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
            <h2>Language setting</h2>
          </div>
        </div>
        <div class="setting-detail-bottom">
          <p class="desc">Select the language.</p>
          <div class="select-language">
            <div class="item active">
              <span class="icon">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4Z"
                  />
                </svg>
              </span>
              <p class="text">한국어</p>
            </div>
            <div class="item">
              <span class="icon">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 12.998H5v-2h14z" />
                </svg>
              </span>
              <p class="text">English</p>
            </div>
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
  }
  .setting-detail-bottom {
    padding: 1rem 0;
    .desc {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.15;
      color: #555;
      padding: 20px 0;
    }
    .select-language {
      .item {
        border-radius: 15px;
        border: solid 1px #3d95ff;
        min-height: 90px;
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

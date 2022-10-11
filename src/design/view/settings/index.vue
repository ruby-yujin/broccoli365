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
            <h2>Setting</h2>
          </div>
        </div>
        <div class="setting-detail-bottom">
          <div class="setting-item">
            <router-link to="">
              <span>Alam setting</span>
              <div class="icon-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
                  />
                </svg>
              </div>
            </router-link>
          </div>
          <div class="setting-item">
            <router-link to="">
              <span>Font size setting</span>
              <div class="icon-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
                  />
                </svg>
              </div>
            </router-link>
          </div>
          <div class="setting-item">
            <router-link to="">
              <span>Language setting</span>
              <div class="icon-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
                  />
                </svg>
              </div>
            </router-link>
          </div>
          <div class="setting-item">
            <router-link to="">
              <span>Term & coditions</span>
              <div class="icon-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
                  />
                </svg>
              </div>
            </router-link>
          </div>
          <div class="setting-item">
            <router-link to="">
              <span>Membership Withdrawal</span>
              <div class="icon-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
                  />
                </svg>
              </div>
            </router-link>
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
    .setting-item {
      border-bottom: 1px solid #ddd;
      padding: 0.8rem 0;
      min-height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.11;
          color: #555;
        }
        .icon-arrow {
          margin-left: auto;
          svg {
            color: #555555;
          }
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

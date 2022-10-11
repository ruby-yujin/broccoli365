<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative detail-guide-line"
  >
    <div class="wrap relative">
      <div class="account-detail-content">
        <div class="account-detail-top">
          <div class="title-wrap">
            <router-link to="/">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </svg>
            </router-link>
            <h2>Account</h2>
          </div>
        </div>
        <div class="account-detail-bottom">
          <div class="account-item">
            <router-link to="/account/profile">
              <div class="user-img">
                <img src="/images/icon_smile.png" alt="" />
              </div>
              <div class="user-profile">
                <span> Profile </span>
                <strong> User name </strong>
              </div>
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
          <div class="account-item">
            <router-link to="">
              <div class="user-profile">
                <span>Device</span>
                <strong>1 device acailable</strong>
              </div>
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
          <div class="account-item">
            <router-link to="">
              <div class="user-profile">
                <span>Notice</span>
              </div>
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
          <div class="account-item">
            <router-link to="">
              <div class="user-profile">
                <span>Setting</span>
              </div>
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
          <div class="account-item">
            <router-link to="">
              <div class="user-profile">
                <span>Logout</span>
              </div>
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
        <div class="version-info">
          <p>
            VersionName : 2.0.4, VersionCode : <br />
            202205044
            <span> Ui Version : 1.3 </span>
          </p>
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
.account-detail-content {
  //  width: 80%;
  // margin: 0 auto;
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #3d95ff;
    text-align: center;
  }
  .account-detail-top {
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
  .account-detail-bottom {
    .account-item {
      border-bottom: 1px solid #ddd;
      padding: 0.8rem 0;
      min-height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid #d8d9db;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px;
          margin-right: 1rem;
          img {
            width: 100%;
          }
        }
        .user-profile {
          span {
            display: block;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.11;
            color: #555;
          }
          strong {
            display: block;
            font-size: 20x;
            font-weight: bold;
            line-height: 1.18;
            color: #555;
          }
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
  .version-info {
    margin-top: 2rem;
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.19;
      color: #555;
      span {
        margin-top: 10px;
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.19;
        color: #adadad;
        text-decoration: underline;
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

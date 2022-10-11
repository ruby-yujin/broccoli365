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
            <h2>Profile</h2>
          </div>
        </div>
        <div class="profile-detail-bottom">
          <div class="profile-edit-img">
            <button class="edit-img" @click="$router.push('/')">
              <img src="/images/icon_profileImg.png" alt="" />
            </button>
          </div>
          <div class="profile-item">
            <span>User Name</span>
            <strong> Tae woo Ko </strong>
          </div>
          <div class="profile-item">
            <span>Nickname</span>
            <strong>아잉</strong>
          </div>
          <div class="profile-item">
            <span>Height</span>
            <strong>172 Cm</strong>
          </div>
          <div class="profile-item">
            <span>Weight</span>
            <strong>85 Kg</strong>
          </div>
          <div class="profile-item">
            <span>Ronking</span>
            <strong>0</strong>
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
.account-detail-content {
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
  }
  .profile-detail-bottom {
    .profile-edit-img {
      padding: 20px 0 0;
      text-align: center;
      button {
        width: 100px;
        > img {
          width: 100%;
        }
      }
    }
    .profile-item {
      border-bottom: 1px solid #ddd;
      padding: 0.8rem 0;
      min-height: 60px;
      span {
        display: block;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.11;
        color: #555;
        margin-bottom: 2px;
      }
      strong {
        display: block;
        font-size: 20x;
        font-weight: bold;
        line-height: 1.18;
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

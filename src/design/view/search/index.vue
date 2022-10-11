<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative detail-guide-line"
  >
    <div class="wrap relative">
      <div class="search-detail-content">
        <div class="search-detail-top">
          <div class="title-wrap">
            <router-link to="">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </svg>
            </router-link>
            <h2>Search</h2>
          </div>
        </div>
        <div class="search-detail-bottom">
          <form
            action="
          "
          >
            <div class="search-item">
              <input type="text" placeholder="Enter the food name" />
              <button>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="10" cy="10" r="7" />
                    <path d="m21 21l-6-6" />
                  </g>
                </svg>
              </button>
            </div>
          </form>
          <p class="search-text my-4">Foods that you eat frequently</p>
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
.search-detail-content {
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #3d95ff;
    text-align: center;
  }
  .search-detail-top {
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
  .search-detail-bottom {
    .search-item {
      width: 90%;
      margin: 20px auto;
      position: relative;
      input {
        width: 100%;
        height: 40px;
        border-bottom: 2px solid #3d95ff;
      }
      button {
        position: absolute;
        right: 0;
        top: 0;
        svg {
          color: #3d95ff;
        }
      }
    }
    .search-text {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.11;
      color: #555;
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

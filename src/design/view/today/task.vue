<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line-02"
  >
    <div class="fulid-wrap relative">
      <div class="floating-icon">
        <img src="/images/icon_tongue.png" alt="icon" />
      </div>
      <div class="nonVerify-top-blue">
        <div class="item">
          <div class="img-wrap">
            <img src="/images/icon_sideSmile.png" alt="icon" />
          </div>

          <div class="title-wrap">
            <h3>Focus! Task</h3>
            <p class="desc">
              It is 26 day(s) of your care plan.<br />
              Let today be the start of something New.
            </p>
          </div>
        </div>
      </div>
      <div class="nonVerify-guide-content d-flex gap-y-2">
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
        <div class="item-accordion-today">
          <div class="top">
            <div class="icon">
              <img src="/images/icon_today01.png" alt="" />
            </div>
            <h3>Blood pressure</h3>
            <span class="icon-arrow">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </span>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item-accordion-today">
          <div class="top">
            <div class="icon">
              <img src="/images/icon_today02.png" alt="" />
            </div>
            <h3>Blood glucose</h3>
            <span class="icon-arrow">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="item-accordion-today">
          <div class="top">
            <div class="icon">
              <img src="/images/icon_today03.png" alt="" />
            </div>
            <h3>Weight</h3>
            <span class="icon-arrow">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="item-accordion-today">
          <div class="top">
            <div class="icon">
              <img src="/images/icon_today04.png" alt="" />
            </div>
            <h3>Nutrition</h3>
            <span class="icon-arrow">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </span>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item-accordion-today">
          <div class="top">
            <div class="icon">
              <img src="/images/icon_today05.png" alt="" />
            </div>
            <h3>Medication(??????)</h3>
            <span class="icon-arrow">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                />
              </svg>
            </span>
          </div>
          <div class="bottom"></div>
        </div>
      </div>
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
.nonVerify-top-blue {
  height: 240px;
  background-color: #3c95ff;
  padding: 2.5rem 2rem 1rem;
  .item {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    .img-wrap {
      width: 70px;
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
        .color-point {
          color: #88fb03;
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
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  height: 100%;
  .item-accordion-today {
    border-radius: 15px;
    border: solid 1px #d8d9db;
    background-color: #fff;
    padding: 0.3rem 20px;
    .top {
      display: flex;

      align-items: center;
      min-height: 55px;
      .icon {
        width: 34px;
        > img {
          max-width: 100%;
        }
      }
      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #555;
        line-height: 1;
        margin-left: 24px;
        span {
          display: block;
          font-size: 16px;
          color: #79818b;
        }
      }
      .do-check {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.45;
        color: #3d95ff;
        font-family: 'Noto Sans';
        margin-left: auto;
      }
      .checked-data {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.45;
        color: #555;
        margin-left: auto;
        margin-right: 10px;
        font-family: 'Noto Sans';
      }
      .icon-arrow {
        width: 25px;
        height: 25px;
        box-shadow: 0 0 6px 0 rgb(6 44 90 / 30%);
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-left: auto;
        svg {
          color: #3d95ff;
        }
        &.isData {
          margin-left: 10px;
        }
      }
    }
    .bottom {
      .menu-set {
        border-top: solid 1px rgba(6, 44, 90, 0.12);
        display: flex;
        padding: 10px 0;
        strong {
          width: 60px;
          display: block;
          position: relative;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.2;
          color: #3d95ff;
          margin-right: 10px;
          font-family: 'Noto Sans' !important;
          &:after {
            content: '';
            width: 15px;
            height: 1px;
            background: #3d95ff;
            position: absolute;
            top: 14px;
          }
        }
        ul {
          width: calc(100% - 70px);
          li {
            display: flex;
            justify-content: center;
            line-height: 1.2;
            font-weight: 300;
            color: #555;
            margin-bottom: 0.3rem;
            font-family: 'Noto Sans' !important;
            span {
              display: block;
              margin-left: auto;
              font-weight: 400;
              color: #000;
              font-family: 'Noto Sans' !important;
            }
          }
        }
      }
      .data-unit {
        text-align: right;
        font-size: 12px;
        font-weight: 500;
        line-height: 2.08;
        color: #a2adba;
      }
    }
    &.active {
      border: none;
      background-color: #f2f8ff;
    }
  }
}
.bottom-gnb {
  max-width: 446px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background: #fff;
  border-top-left-radius: 30px;
  box-shadow: 0 -3px 6px 0 rgb(0 0 0 / 16%);
  .aa {
    color: red;
    position: absolute;
    top: 2px;
    left: 10px;
    font-size: 11px;
  }
  ul {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    li {
      img {
        width: 55px;
        margin: 0 auto;
      }
      p {
        margin-top: 10px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.17;
        color: #555;
        text-align: center;
      }
    }
  }
}
</style>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['19???', '20???', '21???', '22???', '23???', '24???'],
        datasets: [
          {
            label: '1?????? ??????',
            backgroundColor: '#3d95ff',
            data: [0, 25, 50, 75, 100, 125, 150, 175, 200]
          }
        ]
      }
    }
  }
}
</script>

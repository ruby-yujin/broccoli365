<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line"
  >
    <div class="wrap">
      <div
        id="carouselNonverify"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-indicators absolute right-0 bottom-0 left-0 flex items-center justify-center p-0 mb-4"
        >
          <button
            type="button"
            data-bs-target="#carouselNonverify"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselNonverify"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselNonverify"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <div class="carousel-caption">
              <h5 class="slide-title">
                Receive your <br />
                Customized <br />
                Healthcare plan
              </h5>
              <p class="slide-desc mr-auto">
                Dietary imbalance care plan <br />
                For the management of <br />
                hypertension
              </p>
              <p class="slide-desc ml-auto">
                Weight control care plan <br />
                Fore the management of <br />
                diabetes
              </p>
              <div class="slide-icon mx-auto my-4">
                <img src="/images/icon_oh.png" alt="" />
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div class="carousel-caption">
              <h5 class="slide-title">
                Receive your <br />
                Customized <br />
                Healthcare 22
              </h5>
              <p class="slide-desc mr-auto">
                Dietary imbalance care plan <br />
                For the management of <br />
                hypertension 22
              </p>
              <p class="slide-desc ml-auto">
                Weight control care plan <br />
                Fore the management of <br />
                diabetes 22
              </p>
              <div class="slide-icon mx-auto my-4">
                <img src="/images/icon_oh.png" alt="" />
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div class="carousel-caption">
              <h5 class="slide-title">
                Receive your <br />
                Customized <br />
                Healthcare 33
              </h5>
              <p class="slide-desc mr-auto">
                Dietary imbalance care plan <br />
                For the management of <br />
                hypertension 33
              </p>
              <p class="slide-desc ml-auto">
                Weight control care plan <br />
                Fore the management of <br />
                diabetes 33
              </p>
              <div class="slide-icon mx-auto my-4">
                <img src="/images/icon_oh.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="rounded-full btn-lang mx-auto">Preview the service</button>
    </div>
    <button class="btn-bottom max-w-md">AUTH</button>
  </div>
</template>

<style lang="scss">
.guide-line {
  border: 1px solid #eee;
}
.title {
  font-size: 23px;
  font-weight: bold;
  line-height: 1.13;
  color: #9b9b9b;
  margin: 30px 0 40px;
}
#carouselNonverify {
  .carousel-indicators {
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #b1d4ff;
      border: none;
      &.active {
        width: 12px;
        height: 12px;
        background: #3d95ff;
      }
    }
  }
  .carousel-inner {
    .carousel-item {
      .carousel-caption {
        display: grid;
        height: 485px;
        .slide-title {
          width: 80%;
          text-align: left;
          font-size: 28px;
          font-weight: bold;
          line-height: 1.17;
          color: #3d95ff;
          padding-bottom: 1rem;
          border-bottom: 1px solid #3d95ff;
          display: inline-block;
        }
        .slide-desc {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.11;
          text-align: center;
          color: #555;
          padding: 1rem 0;
          border-bottom: 1px solid #3d95ff;
          display: inline-block;
        }
        .slide-icon {
          margin: 2rem auto;
        }
      }
    }
  }
}
.btn-lang {
  display: block;
  width: 288px;
  height: 60px;
  border: solid 1px #3d95ff;
  color: #3d95ff;
  font-size: 20px;
  font-weight: bold;
}

.btn-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  background-color: #6cc902;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
</style>

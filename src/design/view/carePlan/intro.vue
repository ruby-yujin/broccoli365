<template>
  <div
    class="h-screen max-w-md mx-auto flex justify-center relative guide-line"
  >
    <div class="wrap relative">
      <div class="carePlan-intro-content">
        <h2>30-day Care Plan</h2>
        <div class="carePlan-banner">
          Diabetes and high blood pressure care Program This program is forThose
          who need weight Control and nutritional Diet improvement.
          <!-- TODO 추출된 이미지에 없습니다. 제가 캡쳐로 임의 적용했습니다. -->
          <img src="/images/carePlan/carePlan_banner_bg.png" alt="" />
        </div>
        <div class="carePlan-text">
          <strong class="block mb-3"
            ><svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"
              /></svg
            >Goal</strong
          >
          <p>
            Diabetes and high blood <br />
            pressure care Program This program is forThose who need weight
            Control and nutritional Diet improvement.
          </p>
        </div>
        <div class="carePlan-text">
          <strong class="block mb-3"
            ><svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"
              /></svg
            >General</strong
          >
          <p>
            We provide a customized Care program based on the Medical
            qusetionnaire Details of Taewoo.
          </p>
        </div>
      </div>
    </div>
    <button class="btn-bottom max-w-md">START</button>
  </div>
</template>

<style lang="scss">
.guide-line {
  border: 1px solid #eee;
  flex-wrap: wrap;
}
.wrap {
  width: 85%;
  margin: 0 auto;
}
.carePlan-intro-content {
  //  width: 80%;
  // margin: 0 auto;
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #3d95ff;
    text-align: center;
  }
  .carePlan-banner {
    margin: 80px 0 0;
    padding: 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    color: #fff;
    background: #3d95ff;
    position: relative;
    img {
      width: 130px;
      position: absolute;
      top: -85px;
      right: 0;
    }
  }
  .carePlan-text {
    margin-top: 40px;
    strong {
      font-size: 25px;
      font-weight: bold;
      line-height: 1.16;
      color: #3d95ff;
      display: flex;
      align-items: center;
      svg {
        color: #3d95ff;
      }
    }
    p {
      color: #555;
      line-height: 1.1;
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

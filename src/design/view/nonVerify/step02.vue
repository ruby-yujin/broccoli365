<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap">
      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
        >
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img src="/images/icon_oh.png" alt="" class="block mx-auto" />
          </div>
        </div>
      </div>
      <button class="rounded-full btn-lang mx-auto">Preview the service</button>
    </div>
    <button class="btn-bottom max-w-md">AUTH</button>
  </div>
</template>

<style lang="css">
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

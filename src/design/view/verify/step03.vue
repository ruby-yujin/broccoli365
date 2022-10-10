<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <!-- Modal -->
      <div class="">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalSm"
        >
          Small modal
        </button>
      </div>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalSm"
        tabindex="-1"
        aria-modal="true"
      >
        <div class="modal-dialog modal-sm relative w-auto pointer-events-none">
          <div class="modal-content">
            <div class="modal-body relative p-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.common-modal {
  box-shadow: 0 0 10px 0 rgba(6, 44, 90, 0.12);
  border: solid 1px #3d95ff;
  background-color: #fff;
  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.11;
    text-align: center;
    color: #555;
  }
}
.guide-line {
  border: 1px solid #eee;
  padding: 4rem 0 1rem;
  flex-wrap: wrap;
}
.wrap {
  width: 85%;
  margin: 0 auto;
}
.title {
  font-size: 23px;
  font-weight: bold;
  line-height: 1.13;
  color: #555;
  margin: 30px auto 40px;
}
.user-info {
  text-align: center;
  input {
    text-align: center;
    height: 50px;
    border-bottom: 2px solid #3d95ff;
    color: #555;
    font-size: 20px;
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

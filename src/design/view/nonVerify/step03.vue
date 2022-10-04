<template>
  <div
    class="h-screen max-w-md mx-auto flex items-center justify-center relative guide-line"
  >
    <div class="wrap relative">
      <div class="preview-content">
        <div class="flex justify-between items-end preview-top">
          <h2>Preview</h2>
          <img src="/images/icon_cloud.png" alt="icon cloud" />
        </div>
        <div class="preview-middle">
          <p class="subject">
            If you enter your health<br />Status, you can manage<br />
            Your health through Customized programs.
          </p>
          <ul class="check-list">
            <li>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m10 13.6l5.9-5.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-6.6 6.6q-.3.3-.7.3q-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275Z"
                /></svg
              ><span>Personalized Guide</span>
            </li>
            <li>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m10 13.6l5.9-5.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-6.6 6.6q-.3.3-.7.3q-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275Z"
                /></svg
              ><span>Monitoring Status</span>
            </li>
            <li>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m10 13.6l5.9-5.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-6.6 6.6q-.3.3-.7.3q-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275Z"
                /></svg
              ><span>Customized Feedback</span>
            </li>
            <li>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m10 13.6l5.9-5.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-6.6 6.6q-.3.3-.7.3q-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275Z"
                /></svg
              ><span>Join Community</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="rounded-full btn-prev">Cancel</button>
      <button class="rounded-full btn-next">Next</button>
    </div>
  </div>
</template>

<style lang="scss">
.guide-line {
  border: 1px solid #eee;
  flex-wrap: wrap;
}
.wrap {
  width: 80%;
  margin: 0 auto;
}
.preview-content {
  .preview-top {
    margin-bottom: 20px;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #3d95ff;
    }
    img {
    }
  }
  .preview-middle {
    padding: 32px 0 24px;
    border-top: 1px solid #3d95ff;
    border-bottom: 1px solid #3d95ff;
    .subject {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.11;
      letter-spacing: -0.18px;
      text-align: left;
      color: #555;
    }
    .check-list {
      background-color: #f4f9ff;
      margin: 34px 0 24px;
      padding: 1rem 20px;
      li {
        display: flex;
        align-items: center;
        svg {
          color: #3d95ff;
        }
        span {
          margin-left: 5px;
          display: inline-block;
          color: #3d95ff;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
}

.btn-wrap {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  margin-top: auto;
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

<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mt-5">
            <div class="welcome-card card border-0 rounded-lg shadow">
              <h1 class="title display-4">Welcome to our Quiz!</h1>
              <div class="card-body">
                <router-link
                  class="start-quiz-btn btn btn-lg px-5 mt-5 rounded-pill text-white"
                  to="/quiz-example"
                >Start Quiz</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
$primaryColor: #66ceb4;
$heading: "Poppins", sans-serif;

.welcome-card {
  padding: 150px;
  .title {
    font-family: $heading;
  }

  .start-quiz-btn {
    background: $primaryColor;
    font-family: $heading;
  }
}
</style>
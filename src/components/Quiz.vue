<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mt-5">
            <div class="welcome-card card border-0 shadow">
              <h1 class="title text-left display-4">{{quiz[current].question}}</h1>
              <h3 class="title text-left display-4">{{quiz[current].correctAnswer}}</h3>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    quiz: {
      required: true,
      type: Array
    }
  },
  data() {
    return{
      current: 0
    }
  }
};
</script>

<style lang="scss" scoped>
$primaryColor: #66ceb4;
$heading: "Poppins", sans-serif;

.welcome-card {
  padding: 150px;
  border-radius: 30px;
  .title {
    font-family: $heading;
  }

  .start-quiz-btn {
    background: $primaryColor;
    font-family: $heading;
    padding: 12px 85px;
    &:hover {
      background: darken($primaryColor, 10%);
    }
  }
}
</style>
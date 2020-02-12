<template>
      <app-quiz :quiz="quiz"></app-quiz>
</template>

<script>
import Quiz from "../components/Quiz"

export default {
  name: "Home",
  components: {
    'app-quiz': Quiz
  },
  data() {
    return {
      quiz: [
        {
          question: "first question",
          correctAnswer: "yes",
          incorrectAnswer: [
            'no',
            'no',
            'no'
          ]
        },
        {
          question: "second question",
          correctAnswer: "yes",
          incorrectAnswer: [
            'no',
            'no',
            'no'
          ]
        },
        {
          question: "third question",
          correctAnswer: "yes",
          incorrectAnswer: [
            'no',
            'no',
            'no'
          ]
        },
        {
          question: "fourth question",
          correctAnswer: "yes",
          incorrectAnswer: [
            'no',
            'no',
            'no'
          ]
        }
      ]
    };
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
<template>
  <div class="test">

      <section-question />
    <h1>Questions</h1>
    <question />
  </div>
</template>

<script>
  import SectionQuestion from '../components/Section'
  import Question from '../components/Question'

  export default {
    name: 'Home',

    components: {
        SectionQuestion,
        Question

    },
  }
</script>
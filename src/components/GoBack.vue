<template>
  <span class="go-back">
    <button @click="goBack">Go Back to Recipes</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.go-back {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1em 0;
  cursor: pointer;
}
</style>

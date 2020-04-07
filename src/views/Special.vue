<template>
  <div class="home">
      <form>
        <label for="name">Special Name:</label>
        <input type="text" id="name" ref="special_name" v-model="specialName">

        <label for="type">Special Type:</label>
        <input type="text" id="type" ref="my_input" v-model="specialType">

        <label for="description">Special Description:</label>
        <input type="text" id="type" ref="description" v-model="specialText">

        <button @click.prevent="addSpecial()">Submit</button>
      </form>
      <span> Submitted: {{ output }} </span>
      <div
        v-for="special in specials"
        :key="special.title"
        class="specials"
      >
        <div class="specials-content">
          <p>{{ special.title }}</p>
          <p>{{ special.type }} </p>
          <p>{{ special.text }} </p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
const baseURL = 'http://localhost:3001/specials'
export default {
  data () {
    return {
      newSpecial: [],
      specialName: '',
      specialType: '',
      specialText: '',
      output: ''
    }
  },

  computed: {
    specials () {
      return this.$store.state.specials
    }
  },

  async created () {
    try {
      const res = await axios.get(baseURL)

      this.newSpecial = res.data
    } catch (e) {
    }
  },
  methods: {
    async addSpecial () {
      const res = await axios.post(baseURL, {
        title: this.specialName,
        type: this.specialType,
        text: this.specialText
      })
      this.newSpecial = [...this.newSpecial, res.data]
      this.specialName = ''
      this.specialType = ''
      this.specialText = ''
      this.output = this.$refs.special_name.value
    }
  }
}
</script>
<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  label, input, button {
    max-width: 500px;
    margin: 5px auto;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
}
.specials {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #f6f9f9;
  border: 1px solid #c8dada;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

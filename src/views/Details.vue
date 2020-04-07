<template>
    <section class="details">
      <div class="title">
        <h2>{{ $route.params.post.title }} </h2>
        <GoBack />
      </div>
      <div class="overview">
        <div class="overview-header">
            <img :src="'http://localhost:3001/' + $route.params.post.images.medium" v-bind:alt="$route.params.post.title " />
          </div>
          <div class="overview-info">
            <h3> Overview </h3>
            <p> Recipe Added on: {{ $route.params.post.postDate }} </p>
            <p> Updated on {{ $route.params.post.editDate }}</p>
            <p> Servings: {{ $route.params.post.servings }} </p>
            <p> Prep Time: {{ $route.params.post.prepTime }} Mintues</p>
            <p> Cook Time: {{ $route.params.post.cookTime }} Minutes </p>
        </div>
      </div>
    <div class="ingredients">
          <div class="ingredients-list">
            <h4>Ingredients</h4>
            <div class="ingredients-list-column" v-for="ingredients in $route.params.post.ingredients" :key="ingredients.name">
              <span class="name">{{ ingredients.name }} </span>
              <span class="amount">{{ ingredients.amount }}</span>
              <span class="measurement">{{ ingredients.measurement }}</span>
              <template v-for="special in specials">
                  <div class="special" v-if="ingredients.uuid == special.ingredientId" :key="special.title">
                    <span class="title">{{ special.title }},</span>
                    <span>{{ special.type }}:</span>
                    <span>{{ special.text | strippedContent }}</span>
                  </div>
             </template>
          </div>
        </div>
    </div>
        <div class="directions">
          <h4> Directions </h4>
          <div class="" v-for="directions in $route.params.post.directions" :key="directions.instructions">
            <p>{{ directions.instructions }}</p>
          </div>
        </div>
  </section>
</template>
<script>
import GoBack from '@/components/GoBack.vue'
export default {
  components: {
    GoBack
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    specials () {
      return this.$store.state.specials
    }
  },
  filters: {
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/ig, '')
    }
  }
}
</script>

<style lang="scss" scoped>
.details {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: #f6f9f9;
    border: 1px solid #c8dada;
    .title {
      padding: 1em 0;
      h2 {
        margin: 0;
      }
    }
  }
  .overview {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-top: 1px solid #c8dada;
    &-info {
      margin: 0 auto;
    }
    &-header {
      img {
        display: flex;
        width: 100%;
      }
    }
    @media screen and (min-width: 1200px) {
      flex-direction: row;
    }
  }
  .ingredients, .directions {
    border-top: 1px solid #c8dada;
    padding: 0 1em;
    display: block;
  }
  .ingredients {
    &-list {
      display: flex;
      flex-direction: column;
      padding: 1em;
      justify-content: center;
      align-items: center;
      &-column {
        span {
          padding-right: 5px;
        }
        .name {
          font-weight: bold;
        }
      }
    }
    .amount, .measurement {
      font-style: italic;
    }
    .special {
      display: block;
      border: 1px solid #c8dada;
      margin: 5px 0;
      padding: 1em;
      .title {
        font-weight: bold;
      }
    }
  }
</style>

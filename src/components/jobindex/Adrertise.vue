<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      class="courousel-adretise"
      background="#ababab"
      img-width="480"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->

      <!-- Slides with custom text -->
      <div v-for="adrertises in adrertise" :key="adrertises.id">
        <b-carousel-slide :img-src="adrertises.url">
          <h1>{{ adrertises.title }}</h1>
        </b-carousel-slide>
      </div>
      <!-- Slides with image only -->
    </b-carousel>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    adrertise: {
      type: [Array],
      return: {}
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.courousel-adretise {
  margin-bottom: 50px;
}
</style>

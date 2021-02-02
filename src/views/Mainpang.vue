<template>
  <div>
    <div v-for="test in data1" :key="test.id">
      {{ test.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      data1: [
        {
          id: "1",
          name: "kuy",
        },
        { id: "2", name: "hee" },
      ],
    };
  },
});
</script>

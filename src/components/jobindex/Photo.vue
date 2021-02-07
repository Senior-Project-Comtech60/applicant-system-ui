<template>
  <div>
    <div class="img-bg">
      <form class="form-inline my-2 my-lg-0 ">
        <input
          class="form-control mr-2 text-center"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img-bg {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  width: 100%;
  height: 600px;
}
</style>

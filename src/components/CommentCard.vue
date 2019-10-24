<template>
  <div class="comment-card">
  <!-- <a :href="$router.resolve({ name: 'event-show', params: { id: event.id } }).href"> -->
    <div class="col-md-2 col-sm-2 col-xs-4 icon">
        <img :src="`${publicPath}images/images.png`"/>
    </div>
    <div class="col-md-10 col-sm-10 col-xs-8 QAData">
        <h5>藍菇菇</h5>          
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='far fa-star'></i>
        <i class='far fa-star'></i>
        <p>
            {{ publicPath }}
        </p>
    </div>
  <!-- </a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  props: {
    commDesc: Object
  }
}
</script>

<style scoped>
/*...*/
</style>
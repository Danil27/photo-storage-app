<template>
  <div class="gallery">
    <div class="gallery__content">
      <b-img
        v-for="(item, index) in imgs"
        :key="index"
        thumbnail
        fluid
        :src="base_url + item"
        class="gallery__content-item"
      ></b-img>
    </div>
  </div>
</template>
<script>
import axios from "../plugins/axios";

export default {
  name: "gallery",
  data() {
    return {
      slide: 0,
      sliding: null,
      imgs: null,
      base_url: 'http://localhost:3000/images/'
    };
  },
  async mounted(){
    const { data } = await axios.get('/front/photo/get');
    this.imgs = data
    console.log(this.base_url + this.item)
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
.gallery__content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -20px;
}
.gallery__content-item {
  margin-top: 20px;
  margin-left: 20px;
  max-width: 250px;
  height: 250px;
}
.gallery {
  margin: 20px auto;
  width: 820px;
}
</style>
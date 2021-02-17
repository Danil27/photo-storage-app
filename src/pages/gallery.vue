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
      base_url: 'https://pstorage27.herokuapp.com/images/'
    };
  },
  mounted(){
     this.getImgs;
  },
  methods: {
    async getImgs(){
      const { data } = await axios.get('/front/photo/get');
      this.imgs = data
    },
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
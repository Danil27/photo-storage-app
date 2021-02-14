<template>
  <div class="gallery">
    <div class="gallery__content">
      <b-img
        v-for="(item, index) in imgs"
        :key="index"
        thumbnail
        fluid
        :src="item"
        class="gallery__content-item"
      ></b-img>
    </div>
  </div>
</template>
<script>
export default {
  name: "gallery",
  data() {
    return {
      slide: 0,
      sliding: null,
      imgs: [
        "https://picsum.photos/250/250/?image=54",
        "https://picsum.photos/250/250/?image=58",
        "https://picsum.photos/250/250/?image=59",
        "https://picsum.photos/250/250/?image=54",
        "https://picsum.photos/250/250/?image=58",
      ],
    };
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
}
.gallery {
  margin: 20px auto;
  width: 820px;
}
</style>
<template>
  <div class="load-photo">
    <div class="mt-3">
      Выберете файл для загрузки: {{ file ? file.name : "" }}
    </div>
     <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
    <b-button variant="success" @click="sendPhoto">Сохранить</b-button>
  </div>
</template>
<script>
import axios from "../plugins/axios";

export default {
  name: "load-photo",
  data() {
    return {
      file: '',
    };
  },
  methods: {
    handleFileUpload() {
      console.log(this.$refs.file)
      this.file = this.$refs.file.files[0]
    },
    sendPhoto() {
      let formData = new FormData();
      formData.append('file', this.file);
      axios
        .post("/front/photo/save", formData)
        .catch((err) => {
          alert("Cannot upload file." + err);
        });
    },
  },
};
</script>
<style>
.load-photo {
  width: 350px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>
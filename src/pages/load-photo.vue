<template>
  <div class="load-photo">
    <div class="mt-3">
      Выберете файл для загрузки: {{ file ? file.name : "" }}
    </div>
    <b-form-file v-on:change="handleFileUpload()" class="mt-3" plain></b-form-file>
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
      this.file = this.$refs.file.files[0];
    },
    sendPhoto() {
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("/front/loadPhoto", formData)
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
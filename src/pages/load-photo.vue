<template>
  <div class="load-photo">
    <div class="mt-3">
      Выберете файл для загрузки: {{ file ? file.name : "" }}
    </div>
    <b-form-file v-model="file" class="mt-3" plain></b-form-file>
  </div>
</template>
<script>
export default {
  name: "load-photo",
  data() {
    return {
      file: null,
    };
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
<template>
  <div class="user">
    <div class="user__img">
      <b-img
        thumbnail
        fluid
        src="https://picsum.photos/250/250/?image=58"
        alt="Image 2"
      ></b-img>
    </div>
    <div class="user__info">
      <Profile v-if="editEnabled" />
      <EditProfile v-else />
      <b-button variant="primary" v-if="editEnabled" @click="editProfile"
        >Редактировать</b-button>
      <b-button variant="success" v-else @click="editProfile">Сохранить</b-button>
      <b-button variant="danger" class="ml-3" @click="exitProfile">Выйти</b-button>
    </div>
  </div>
</template>
<script>
import Profile from "@/components/Profile.vue";
import EditProfile from "@/components/EditProfile.vue";
export default {
  name: "user",
  components: {
    Profile,
    EditProfile,
  },
  data() {
    return {
      editEnabled: true,
    };
  },
  methods: {
    exitProfile(){
      this.$store.commit("auth/CLEAR_ALL");
      this.$router.push('/login')
    },
    editProfile() {
      this.editEnabled = !this.editEnabled;
    },
  },
};
</script>
<style>
.user {
  display: flex;
  flex-direction: row;
  width: 820px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.user__info {
  margin-left: 20px;
}
</style>
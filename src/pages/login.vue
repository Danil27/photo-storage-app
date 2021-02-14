<template>
  <div class="login">
      <span class="login__title">Вход</span>
    <b-container fluid>
      <b-row class="my-3">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Логин"
          ></b-form-input>
      </b-row>
      <b-row class="my-3">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Пароль"
            type="password"
          ></b-form-input>
      </b-row>
    <b-button variant="light" class="login__button" block >Войти</b-button>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
<style>
.login {
  width: 350px;
  padding: 20px;
  margin: 20px auto;
  background-color: #343a40;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.login__title{
    font-size: 24px;
    color: rgb(231, 231, 231);
}
.login__button{
    margin-top: 40px
}
</style>
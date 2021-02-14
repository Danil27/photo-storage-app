<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Имя:" label-for="input-2">
        <b-form-input
          id="input-2"
         
          placeholder="Имя"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
export default {
    name: "EditProfile",
}
</script>
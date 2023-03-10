<template>
  <div>
    <v-card class="mx-auto" max-width="600" title="User Registration">
      <v-container>
        <v-text-field clearable :rules="[rules.required]" v-model="first" color="green" label="First name" variant="underlined"></v-text-field>

        <v-text-field clearable :rules="[rules.required]" v-model="last" color="green" label="Last name" variant="underlined"></v-text-field>

        <v-text-field v-model="email" :rules="[rules.email, rules.required]" variant="underlined" color="green" label="Email address"
          type="email"></v-text-field>

        <v-text-field v-model="password" variant="underlined" color="green"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.password, rules.length(6), rules.required]"
          :type="show ? 'text' : 'password'" name="input-10-2" label="Password" hint="At least 8 characters"
          class="input-group--focused" @click:append="show = !show"></v-text-field>

        <v-checkbox v-model="terms" color="green" label="I agree to site terms and conditions"></v-checkbox>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="green" variant="tonal">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const first = ref('');
const last = ref('');
const email = ref('');
const password = ref('');
const show = ref(false);
const terms = ref(false);
const rules = ref({
  email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
  length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
  password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
    'Password must contain an upper case letter, a numeric character, and a special character',
  required: v => !!v || 'This field is required',
})

</script>

<style lang="scss" scoped></style>
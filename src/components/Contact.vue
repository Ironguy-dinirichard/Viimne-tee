<template>
  <div>
    <div class="d-flex flex-column mb-6">
      <v-card key="1" class="pa-2" outlined tile>
        Flex item 1
      </v-card>
      <div class="d-flex justify-space-around ">
        <form>
          <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
          <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
          <v-textarea v-model="message" required filled auto-grow label="Write Message" rows="4" row-height="30" shaped @input="$v.message.$touch()" @blur="$v.message.$touch()"></v-textarea>
          <div class="error" v-if="!$v.message.minLength">Message must have at least {{ $v.message.$params.minLength.min }} characters.</div>

          <v-btn class="mr-4" @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(25) },
    email: { required, email },
    message: { required, minLength: minLength(5) }
  },

  data: () => ({
    name: "",
    email: "",
    message: "",
    submitStatus: "ERROR"
  }),

  computed: {
    messageErrors() {
      const errors = [];
      if (!this.$v.select.minLength) return errors;
      !this.$v.select.minLength && errors.push("Message is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
    // ,
    // sub() {
    //   if (this.$v.$invalid) {
    //     this.submitStatus = "ERROR";
    //   }
    //   return this.submitStatus;
    // }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

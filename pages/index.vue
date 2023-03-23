<template>
  <div>
          <HomeHerobeta />
    <HomeAbout />
    <HomeIntro />
    <HomeReinforcement />

    <div id="beta" class="bg-black">
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start text-white">
            <h1 class="display-4 fw-bold lh-1 mb-3">Join Our Beta Testing Program</h1>
            <p class="col-lg-10 fs-4">Be the first person to get early access as beta tester of Alun App</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form @submit.prevent="submitForm" data-formtrack class="p-4 p-md-5 border rounded-3 bg-white">
            <input type="hidden" name="_email.subject" value="You have a new leads on Leverate Website" />
            <input type="hidden" name="_email.from" value="LVRT Dev Team" />
            <input type="hidden" name="_email.template.title" value="You have a new leads on Leverate Website" />
            <input type="hidden" name="_email.template.footer" value="false" />
            <input type="checkbox" name="_alunhoney" style="display:none" tabindex="-1" autocomplete="off" />
              <div class="form-floating mb-3">
                <input v-model="full_name" type="full_name" class="form-control" id="floatingPassword" placeholder="Your Name">
                <label for="floatingPassword">Your Name</label>
              </div>
              <div class="form-floating mb-3">
                <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <!-- <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> Term of services agreement
                </label>
              </div> -->
              <button class="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
              <hr class="my-4">
              <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>
    </div>


    <!-- <HomeBeta /> -->
    <!-- <HomeBenefit /> -->
    <!-- <HomeClosingStatement /> -->
  </div>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/WgQ3uShk";

export default {
  data() {
    return {
      full_name: "",
      email: "",
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: this.full_name,
          email: this.email,
        }),
      });
      // alert("Form submitted");
      this.$router.push('/thank-you-beta')

    },
  },
}
</script>


<script setup>
useHead({
  title: 'Alun - Music App for Your Well-Being Acivities',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'AI generated ambient sound that\'s personalized to improve your mental health daily activities.' }
  ],
  bodyAttrs: {
    class: 'alun'
  }
})
</script>

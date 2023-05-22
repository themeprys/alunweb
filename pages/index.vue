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
            <h1 class="display-4 fw-bold lh-1 mb-3">
              Bergabunglah dalam program beta kami
            </h1>
            <p class="col-lg-10 fs-4">
              Jadilah salah satu dari yang pertama mencoba aplikasi Alun dengan mendaftarkan diri dalam program uji coba versi beta.</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              @submit.prevent="submitForm"
              data-formtrack
              class="p-4 p-md-5 border rounded-3 bg-white"
            >
              <input
                type="checkbox"
                name="_alunhoney"
                style="display: none"
                tabindex="-1"
                autocomplete="off"
              />
              <div class="form-floating mb-3">
                <input
                  v-model="full_name"
                  type="full_name"
                  class="form-control"
                  id="floatingName"
                  placeholder="Your Name"
                  required
                />
                <label for="floatingName">Nama Anda</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingEmail">Alamat e-mail</label>
              </div>
              <!-- <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> Term of services agreement
                </label>
              </div> -->
              <button class="w-100 btn btn-lg btn-dark" type="submit">
                Sign up
              </button>
              <hr class="my-4" />
              <small class="text-muted"
                >By mengisi form ini, Anda menyetujui layanan dan ketentuan Alun</small
              >
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

      this.$router.push("/thank-you-beta");
    },
  },
};
</script>


<template>
<div id="beta" class="bg-black">
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start text-white">
        <h1 class="display-4 fw-bold lh-1 mb-3">Join Our Beta Testing Program</h1>
        <p class="col-lg-10 fs-4">Be the first person to get early access as beta tester of Alun App</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-white">
          <div class="form-floating mb-3">
            <input type="full_name" class="form-control" id="floatingPassword" placeholder="Your Name">
            <label for="floatingPassword">Your Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
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
</template>

<script>
export default {

}
</script>

<style>
</style>
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col p-0">
          <HomeHerobeta />
        </div>
      </div>
    </div>
    <HomeIntro />
    <HomeAbout />
    <HomeReinforcement />
    <HomeBeta />
    <!-- <HomeBenefit /> -->
    <!-- <HomeClosingStatement /> -->
  </div>
</template>

<script setup>
useHead({
  title: 'My Company',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>

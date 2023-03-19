<template>
  <div>
          <HomeHerobeta />
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
  title: 'Alun - Music App for Your Well-Being Acivities',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'AI generated ambient sound that\'s personalized to improve your mental health daily activities.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>

<template>
  <div>
    <NuxtLink to="/">Back to "/"</NuxtLink>

    <br>

    <NuxtLink v-for="meow in response.data" :key="meow.id" :to="`/meows/${meow.id}`">
      {{ meow.attributes.title }}
      <br>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">


interface Meow {
  title: string
  article: string
}

const { find } = useStrapi()
const response = await find<Meow>('meows')
</script>

<style scoped>

</style>
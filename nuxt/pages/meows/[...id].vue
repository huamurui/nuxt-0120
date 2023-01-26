<template>
  <div>
    <NuxtLink to="/meows">Back</NuxtLink>
    <p>{{ re.data.attributes.title }}</p>

    <p>{{ re.data.attributes.article }}</p>
  </div>
</template>

<script setup lang="ts">
interface Meow {
  title: string
  article: string
}


const { findOne } = useStrapi()

const route = useRoute()
const id = route.params.id as string[]
const re = await findOne<Meow>('meows', id[0])
</script>

<style scoped>

</style>
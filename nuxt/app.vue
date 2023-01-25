<template>
  <div>
    <h2>aaa</h2>
    <p>{{ data }}</p>
    <p>{{ response }}</p>
    <p>{{ re1 }}</p>
  </div>
</template>

<script setup lang="ts">

const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains',{
  // 不写就是全拿...
})

interface Meow {
  title: string
  article: string
}

const { find, findOne } = useStrapi()
const response = await find<Meow>('meows')
const re1 = await findOne<Meow>('meows', 1)

// const route = useRoute()
// const re = await findOne<Meow>('meows', route.params.id)


</script>
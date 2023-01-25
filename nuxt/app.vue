<template>
  <div>
    <h2>aaa</h2>
    <p>{{ data }}</p>
    <!-- <p>{{ response }}</p> -->
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

// const { find } = useStrapi()
// const response = await find<Meow>('meows')

</script>
<template>
  <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
    <Sidebar />
    <Feed />
    <Widgets />
  </main>
  <p>{{ a }} 这行文字是为了触发滚动条...</p>
  <div></div>
</template>

<script setup lang="ts">
let a = 1
// 目前会有...每次启动项目样式就丢失的问题。但是对temlate修改后，添加或删除一个div就行，样式就会恢复。这个问题很奇怪，我也不知道怎么解决。
</script>

<style scoped>

</style>
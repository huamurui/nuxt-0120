<template>
  <div className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation">
    <div className="h-7"></div>
    <span className="hidden xl:inline">
      <slot>
        text
      </slot>
    </span>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
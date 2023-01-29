<template>
  <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
    <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
      <img src="https://huamurui.github.io/logo.svg" width="30" height="30" />
    </div>
    <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
      <SidebarLink>
        <Icon name="typcn:document-text" /> Home
      </SidebarLink>
      <SidebarLink>
        <Icon name="fa6-regular:circle" />Explore
      </SidebarLink>
      <SidebarLink>Notifications</SidebarLink>
      <SidebarLink>Messages</SidebarLink>
      <SidebarLink>Bookmarks</SidebarLink>
      <SidebarLink>Lists</SidebarLink>
    </div>
    <button
      className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
      Tweet
    </button>
  </div>
</template>

<style lang="postcss" scoped>

</style>
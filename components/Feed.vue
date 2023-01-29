<template>
  <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
    <div
      className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
      <h2 className="text-lg sm:text-xl font-bold">Home</h2>
      <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
        <div className="h-5 text-white">
          <Icon name="fa6-solid:chevron-down" />
        </div>
      </div>
    </div>





    <div className="pb-72">
      <div className="p-3 flex cursor-pointer border-b border-gray-700">
        <div className="flex flex-col space-y-2 w-full">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline inline-block">
                post?.username
              </h4>
              <span className="text-sm sm:text-[15px] ml-1.5">
                post?.tag
              </span>
            </div>
            " "
            <span className="hover:underline text-sm sm:text-[15px]">
              <div fromNow>post?.timestamp?.toDate(</div>
            </span>
          </div>
          <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
            这里啊啊啊啊啊啊啊
          </p>
          <div className="icon group flex-shrink-0 ml-auto">
            <div className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"></div>
          </div>
        </div>
        <div className="text-[#6e767d] flex justify-between w-10/12 mx-auto">
          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <Icon name="chart" className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
          </div>




          <div className="icon group">
            <Icon name="share" className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <Icon name="bar" className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

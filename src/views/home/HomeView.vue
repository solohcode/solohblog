<script>
import VueWriter from 'vue-writer'
import * as Kinesis from 'vue-kinesis'

export default {
  name: 'HomeView',
  components: {
    VueWriter,
    ...Kinesis
    // IconGradient: ({ img, size, classStyle, text }) => (
    //   <div class={`${classStyle || ''} group relative`}>
    //     <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    //     <img alt='icon' src={img} class={size} />
    //     <p>{text}</p>
    //   </div>
    // )
  },
  data: () => ({
  }),
  computed: () => {}
}
</script>
<template>
  <div class="w-full p-3">
    <kinesis-container class="w-full">
      <div class="w-full h-screen relative">
        <kinesis-element :strength="50" class="hidden md:block md:w-[400px] md:h-[400px] rounded-full absolute top-28 -right-60 bg-[#eaf1fa]" />
        <kinesis-element :strength="40" class="hidden md:block md:w-[250px] md:h-[250px] rounded-full absolute top-40 -left-40 bg-[#faeaea]" />
        <kinesis-element :strength="20" class="hidden md:block md:w-[120px] md:h-[120px] rounded-full absolute -bottom-1 right-52 bg-[#eafaf2]" />
        <kinesis-element :strength="40" class="hidden md:block md:w-[150px] md:h-[150px] rounded-full absolute bottom-32 left-60 border-[20px] border-[#faf3ea]" />
        <kinesis-element :strength="20" class="hidden md:block md:w-[250px] md:h-[250px] rounded-full absolute top-28 right-80 border-[20px] border-[##f2eafa]" />
        <kinesis-element :strength="40" class="hidden md:block md:w-[100px] md:h-[100px] rounded-full absolute top-40 left-96 bg-[#eafaf2]" />

        <div class="w-full md:w-[80%] h-[100%] align-middle mx-auto md:grid md:grid-cols-2 gap-5 items-center relative">
          <div class="space-y-5">
            <p class="md:text-7xl font-black text-black dark:text-inherit ff-rubik"><VueWriter :array="['Hello There!']" class="ff-rubik" /></p>
            <p>Welcome to my personal tech blog! Here you'll find the latest news, insights, and tips on everything related to technology. From the latest gadgets and software to emerging trends and innovative ideas, I cover it all.</p>

            <div v-for="id in Array.from(Array(2).keys())" v-bind:key="id" class="w-full mx-auto">
              <div class="w-full relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative px-7 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                  </svg>
                  <div class="space-y-2">
                    <p class="text-slate-800">Learn how to make a glowing gradient background!</p>
                    <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <kinesis-element :strength="10" class="w-full relative">
              <img
                alt="home top"
                src="../../assets/home-top.png"
                class="w-full md:w-fit mx-auto animate__animated animate__fadeIn"
              >
            </kinesis-element>
          </div>
        </div>
      </div>
    </kinesis-container>
  </div>
</template>

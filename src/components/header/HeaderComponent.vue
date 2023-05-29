<script>
import * as FlowBite from 'flowbite-vue'
import darkLogo from '@/assets/logo-dark.png'
import lightLogo from '@/assets/logo-light.png'
// import VueIcon from 'vue-icon'

export default {
  name: 'HeaderComponent',
  components: {
    ...FlowBite
  },
  data: function () {
    return {
      darkLogo,
      lightLogo,
      theme: localStorage?.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
  },
  methods: {
    handleTheme (theme) {
      this.theme = theme
      localStorage.setItem('theme', theme)
    }
  },
  computed: {
    console: () => console,
    window: () => window
  }
}
</script>

<template>
  <div class="w-full">
    <Navbar class="w-full shadow-md md:!px-20 !fixed z-10 dark:!bg-[#021422DD]">
      <template #logo>
        <router-link to="/" class="flex items-center space-x-2">
          <img alt="logo" :src="lightLogo" class="w-[20px]" />
          <p class="text-xl font-bold text-[#2a3d4f] dark:text-white">SolohBlog</p>
        </router-link>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu" class="items-center !bg-transparent">
          <router-link to="/" class="hover:text-[black] hover:dark:text-white">Home</router-link>
          <router-link to="/articles" class="hover:text-[black] hover:dark:text-white">Articles</router-link>
          <a href="https://solohcode.surge.sh/portfolio" class="hover:text-[black] hover:dark:text-white">Portfolio</a>
          <a href="https://solohcode.surge.sh/contact" class="hover:text-[black] hover:dark:text-white">Contact</a>
          <div class="flex md:hidden items-center space-x-10 justify-between pt-3">
            <div class="space-x-4">
              <a href="https://github.com/solomon-ayodele65" target="_blank" class="text-lg fa-brands fa-github hover:text-[black] hover:dark:text-white"></a>
              <a href="https://twitter.com/solohcode" target="_blank" class="text-lg fa-brands fa-twitter hover:text-[black] hover:dark:text-white"></a>
              <a href="https://linkedin.com/in/solohcode" target="_blank" class="text-lg fa-brands fa-linkedin hover:text-[black] hover:dark:text-white"></a>
            </div>
            <button
              class="w-10 h-6 border rounded-xl px-0.5 flex items-center dark:border-gray-500 transition-all"
              :class="{'justify-end': theme === 'light'}"
              v-on:click="handleTheme(theme === 'dark' ? 'light' : 'dark')"
            >
              <button
                class="text-xs fa-solid rounded-full w-5 h-5 text-center bg-[#cacaca] dark:bg-[#2a3d4f]"
                :class="{'fa-sun': theme === 'dark', 'fa-moon': theme === 'light'}"
              ></button>
            </button>
          </div>
        </NavbarCollapse>
      </template>
      <template #menu-icon>
        <span class="fa-solid fa-bars dark:text-white text-2xl"></span>
      </template>
      <template #right-side>
        <div class="flex items-center space-x-10">
          <div>
            <label for="header_search" class="text-xs fa-solid fa-magnifying-glass text-gray-400"></label>
            <input
              type="search"
              id="header_search"
              placeholder="Search blogs and articles..."
              class="truncate bg-transparent border-0 focus:ring-0 px-2"
            />
          </div>
          <div class="space-x-4">
            <a href="https://github.com/solomon-ayodele65" target="_blank" class="text-lg fa-brands fa-github hover:text-[black] hover:dark:text-white"></a>
            <a href="https://twitter.com/solohcode" target="_blank" class="text-lg fa-brands fa-twitter hover:text-[black] hover:dark:text-white"></a>
            <a href="https://linkedin.com/in/solohcode" target="_blank" class="text-lg fa-brands fa-linkedin hover:text-[black] hover:dark:text-white"></a>
          </div>
          <button
            class="w-10 h-6 border rounded-xl px-0.5 flex items-center dark:border-gray-500 transition-all"
            :class="{'justify-end': theme === 'light'}"
            v-on:click="handleTheme(theme === 'dark' ? 'light' : 'dark')"
          >
            <button
              class="text-xs fa-solid rounded-full w-5 h-5 text-center bg-[#cacaca] dark:bg-[#2a3d4f]"
              :class="{'fa-sun': theme === 'dark', 'fa-moon': theme === 'light'}"
            ></button>
          </button>
        </div>
      </template>
    </Navbar>
  </div>
</template>

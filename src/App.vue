<script>
import HeaderComponent from '@/components/header/HeaderComponent'
import FooterComponent from '@/components/footer/FooterComponent'
import * as FlowBite from 'flowbite-vue'
import * as Kinesis from 'vue-kinesis'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ...FlowBite,
    ...Kinesis
  },

  data () {
    return {
      scTimer: 0,
      scY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

}
</script>

<template>
  <HeaderComponent />
  <router-view/>
  <button class="w-[35px] h-[35px] md:w-[45px] md:h-[45px] bg-primary rounded-full text-white fixed right-2 md:right-5 bottom-20" v-show="scY > 1000" @click="toTop">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
  <FooterComponent />
</template>

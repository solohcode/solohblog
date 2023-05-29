<script>
export default {
  name: 'FooterComponent'
}
</script>

<template>
  <div class="w-full text-center px-5 md:px-20 border-t dark:border-[#2a3d4f] py-5 dark:bg-[#0214224D] md:flex justify-between items-center space-y md:space-y-0">
    <div class="md:flex md:space-x-2">
      <b class="hidden md:block text-[#2a3d4f] dark:text-white">SolohBlog</b>
      <p>{{ new Date().getFullYear() }} copyright all right reserved.</p>
    </div>
    <div class="space-x-4">
      <b>Follow Me:</b>
      <a href="https://github.com/solomon-ayodele65" target="_blank" class="text-lg fa-brands fa-github hover:text-[black] hover:dark:text-white"></a>
      <a href="https://twitter.com/solohcode" target="_blank" class="text-lg fa-brands fa-twitter hover:text-[#1DA1F2] hover:dark:text-white"></a>
      <a href="https://linkedin.com/in/solohcode" target="_blank" class="text-lg fa-brands fa-linkedin hover:text-[#0072b1] hover:dark:text-white"></a>
      <a href="https://facebook.com/solohcode" target="_blank" class="text-lg fa-brands fa-facebook hover:text-[#4267B2] hover:dark:text-white"></a>
      <a href="https://instagram.com/solohcode" target="_blank" class="text-lg fa-brands fa-instagram hover:text-[#E1306C] hover:dark:text-white"></a>
    </div>
  </div>
</template>

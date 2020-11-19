<template>
  <div @mouseover="showMenu = true"
    @mouseleave="showMenu = false" class="text-center relative">
      <div @click="toggleMenu" class="button flex items-center h-full">
          {{$auth.user.name}}
      </div>
      <ul v-if="showMenu" class="absolute right-0 bg-green-200 w-40">
        <li
          class="dropdownItem"
          v-for="(item, index) in items"
          :key="index" :to="item.link"
        >
        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
    data: () => ({
      showMenu:true,
      items: [
        { title: 'Profile', link :'/user/profile' },
        { title: 'My articles', link :'/user/articles' },
        { title: 'Settings', link :'/user/settings' },
      ],
    }),
    methods: {
      toggleMenu(){
        this.showMenu = !this.showMenu;
      }
    },
  }
</script>
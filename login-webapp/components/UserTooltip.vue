<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          dark
          text
          v-bind="attrs"
          v-on="on"
        >
          {{$auth.user.name}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index" :to="item.link"
        >
                <v-list-item-title>
                {{ item.title }}
                </v-list-item-title>

        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
    data: () => ({
      items: [
        { title: 'Profile', link :'/user/profile' },
        { title: 'My articles', link :'/user/articles' },
        { title: 'Settings', link :'/user/settings' },
      ],
    }),
  }
</script>
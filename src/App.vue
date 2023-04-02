<script setup lang="ts"></script>

<template>
  <div id="content">
    <router-view></router-view>
    <!-- <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<style scoped>
/* .v-enter-active,
.v-leave-active {
	transition: 1s;
} */
/* .v-enter,
.v-leave-to {
	opacity: 0;
} */
</style>

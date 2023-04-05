<script setup lang="ts"></script>

<template>
  <div id="content">
    <!-- <router-view></router-view> -->
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.v-enter-from {
  opacity: 0;
  /* transform: translateY(200px); */
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-out;
}
.v-leave-to {
  opacity: 0;
  /* transform: translateY(-200px); */
}

</style>

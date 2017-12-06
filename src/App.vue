<template>
  <div class="container-fluid">
    <app-header class="header"></app-header>
    <transition name="components" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style scoped>
  .container-fluid {
    margin: 30px auto;
    max-width: 1600px;
  }

  .header {
    margin-bottom: 30px;
  }

  .components-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .components-enter-active {
    transition-duration: 0.3s;
  }

  .components-leave {

  }

  .components-leave-active {
    transform: translateY(-30px);
    opacity: 0;
    transition-duration: 0.3s;
  }
</style>

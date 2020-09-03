<template>
  <div class="wrap">
  <div class="dot dot-1"></div>
  <div class="dot dot-2"></div>
  <div class="dot dot-3"></div>
  <div class="dot dot-4"></div>
  <div class="dot dot-5"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body,html {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #D9D7DD;
}

.dot {
  display: inline-block;
  margin: 0 auto;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: .4em;
  animation-name: dots;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes dots {
  50% {
    opacity: 0;
    transform: scale(0.7) translateY(10px);
  }
}

.dot-1 {
  background-color:orange;
  animation-delay: 0.2s;
}

.dot-2 {
  background-color: #0F9D58;
  animation-delay: 0.4s;
}

.dot-3 {
  background-color: #DB4437;
  animation-delay: 0.6s;
}

.dot-4 {
  background-color: #0055f4;
  animation-delay: 0.8s;
}
</style>
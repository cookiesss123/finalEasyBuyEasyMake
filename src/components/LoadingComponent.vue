<template>
    <div class="d-flex flex-column align-items-center py-10">
      <img src="../../src/assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <h1 class="text-center fw-bold text-lightBrown">
        <span class="me-1 animate-text">L</span>
        <span class="mx-1 animate-text">o</span>
        <span class="mx-1 animate-text">a</span>
        <span class="mx-1 animate-text">d</span>
        <span class="mx-1 animate-text">i</span>
        <span class="mx-1 animate-text">n</span>
        <span class="mx-1 animate-text">g</span>
        <span class="mx-2 animate-text">.</span>
        <span class="me-2 animate-text">.</span>
        <span class="animate-text">.</span>
      </h1>
    </div>
</template>
<script>
export default {
  mounted () {
  }
}
</script>
<style>

.loadingLogo {
  animation: move 1.5s infinite;
}
@keyframes move {
  0% {
    transform: rotateY(0deg);

  }
  50% {
    transform: rotateY(-180deg);

  }
  100% {
    transform: rotateY(180deg);
  }
}

.animate-text {
  opacity: 0;
  animation: fadeIn 2s ease-in-out infinite;
}

.animate-text:nth-child(1) {
  animation-delay: 0.1s;
}
.animate-text:nth-child(2) {
  animation-delay: 0.2s;
}
.animate-text:nth-child(3) {
  animation-delay: 0.3s;
}
.animate-text:nth-child(4) {
  animation-delay: 0.4s;
}
.animate-text:nth-child(5) {
  animation-delay: 0.5s;
}
.animate-text:nth-child(6) {
  animation-delay: 0.6s;
}
.animate-text:nth-child(7) {
  animation-delay: 0.7s;
}
.animate-text:nth-child(8) {
  animation-delay: 0.8s;
}
.animate-text:nth-child(9) {
  animation-delay: 0.9s;
}
.animate-text:nth-child(10) {
  animation-delay: 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>

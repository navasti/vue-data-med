<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.loader {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.spinner {
  display: inline-block;
  width: 8rem;
  height: 8rem;
}
.spinner:after {
  content: " ";
  display: block;
  width: 6.4rem;
  height: 6.4rem;
  margin: 0.8rem;
  border-radius: 50%;
  border: 0.6px solid #000000;
  border-color: #000000 transparent #000000 transparent;
  animation: spinning 1.2s linear infinite;
}
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script></script>

<template>
  <div class="test">
    <!-- <h1>About</h1> -->
    <ul>
      <li class="router-link">
        <RouterLink
          class="router-link"
          to="/sectionabout/Work life"
        >Work life</RouterLink>
      </li>
      <li class="router-link">
        <RouterLink to="/sectionabout/Personal life">Personal life</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.test {
  box-sizing: border-box;
  background-color: rgb(143, 233, 233);
}

.router-link {
  margin-top: 10vh;
}
</style>

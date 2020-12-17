<template>
  <main>
      <span>
            this is the footer
        </span>
        <span style="padding-left: 4rem">
            Number of users: {{ users }}
        </span>
  </main>
</template>

<script>
export default {
    props: ['users']

}
</script>

<style>

</style>
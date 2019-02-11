<template>
  <span class="toggle" role="checkbox" tabindex="0"
    @click='toggle'
    @keydown.space.prevent='toggle'
    :aria-checked='toggler.toString()'
  ></span>
</template>

<script>
export default {
  props: ['toggler'],

  model: {
    prop: 'toggler',
    event: 'toggle'
  },

  methods: {
    toggle () {
      this.$emit('toggle', !this.toggler)
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="text-center p-8 my-8">
      <render>
        <h1 slot-scope="{ subject }">
          Hello {{ subject }}!
        </h1>
      </render>
    </div>
  </div>
</template>

<script>
import Render from '@/components/Render.vue'

export default {
  components: {
    Render
  },

  data () {
    return {}
  }
}
</script>

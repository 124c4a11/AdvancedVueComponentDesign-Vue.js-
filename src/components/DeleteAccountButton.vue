<template>
  <button
    @click="confirmDeleteModalOpen = true"
    type="button"
  >
    <slot/>
    <portal to="modals" v-if="confirmDeleteModalOpen">
      <confirm-delete-modal
        :show="confirmDeleteModalOpen"
        :account-id="accountId"
        @close="confirmDeleteModalOpen = false"
      />
    </portal>
  </button>
</template>

<script>
import ConfirmDeleteModal from './ConfirmDeleteModal.vue'

export default {
  components: {
    ConfirmDeleteModal
  },

  props: ['accountId'],

  data () {
    return {
      confirmDeleteModalOpen: false
    }
  }
}
</script>

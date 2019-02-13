<template>
  <renderless-tag-input
    :tags="tags"
    @update="(newTags) => $emit('update', newTags)"
  >
    <div
      slot-scope="{
        tags,
        removeButtonEvents,
        removeTag,
        inputProps,
        inputEvents
      }"
      class="tag-input mt-8"
    >
      <span
        v-for="tag in tags"
        :key="tag"
        class="tag-input-tag"
      >
        <span>{{ tag }}</span>
        <button
          v-on="removeButtonEvents(tag)"
          type="button"
          class="tag-input-remove"
        >&times;</button>
      </span>
      <input
        v-bind="inputProps"
        v-on="inputEvents"
        class="tag-input-text"
        placeholder="Add tag..."
      >
    </div>
  </renderless-tag-input>
</template>

<script>
import RenderlessTagInput from './RenderlessTagInput.vue'

export default {
  components: {
    RenderlessTagInput
  },

  model: {
    prop: 'tags',
    event: 'update'
  },

  props: {
    tags: { required: true }
  }
}
</script>

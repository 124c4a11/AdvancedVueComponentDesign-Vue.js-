<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Stacked Layout</label>

      <renderless-tag-input v-model="tags" :remove-on-backspace="false">
        <div
          slot-scope="{
            tags,
            addTag,
            removeButtonEvents,
            inputProps,
            inputEvents
          }"
          class="stacked-tag-input"
        >
          <div class="stacked-tag-input-form">
            <input class="form-input" placeholder="Add tag..."
              v-bind="inputProps"
              v-on="inputEvents"
            >
            <button class="btn btn-indigo"
              @click="addTag"
            >Add Tag</button>
          </div>
          <ul class="stacked-tag-list">
            <li v-for="tag in tags" :key="tag">
              {{ tag }}
              <button type="button" class="stacked-tag-link"
                v-on="removeButtonEvents(tag)"
              >Remove</button>
            </li>
          </ul>
        </div>
      </renderless-tag-input>
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tag Input</label>

      <renderless-tag-input v-model="tags">
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
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <tag-input v-model="tags"></tag-input>
    </div>
  </div>
</template>

<script>
import TagInput from '@/components/TagInput.vue'
import RenderlessTagInput from '@/components/RenderlessTagInput.vue'

export default {
  components: {
    TagInput,
    RenderlessTagInput
  },

  data () {
    return {
      tags: ['awesome', 'excellent', 'amazing']
    }
  }
}
</script>

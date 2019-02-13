<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <contact-list :pseudo-slot="({ contact }) => contact.name.first">
        <a slot-scope="{ contact }" :href="`/contacts/${contact.id}`">
          {{ contact.name.first }}
        </a>
      </contact-list>

      <fetch-json url="/data/albums.json">
        <div class="card mt-8" slot-scope="{ response: albums, loading }">
          <h1 class="text-2xl font-bold mb-6">Top Death Metal Albums</h1>
          <div v-if="loading" class="text-grey-darker">
            Loading...
          </div>
          <div v-else>
            <div class="album-grid">
              <div
                v-for="album in albums"
                :key="album.id"
                class="album-grid-item"
              >
                <img :src="album.artwork" class="" alt="">
                <h2 class="album-title">{{ album.title }}</h2>
                <p class="album-artist">{{ album.artist }}</p>
              </div>
            </div>
          </div>
        </div>
      </fetch-json>
    </div>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList.vue'
import FetchJson from '@/components/FetchJson.vue'

export default {
  components: {
    ContactList,
    FetchJson
  }
}
</script>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const showConfirm = ref(false);

const confirmDelete = () => {
  showConfirm.value = true;
};

const deleteItem = () => {
  console.log("Item deleted");
  showConfirm.value = false; // Close the dialog after deletion
};
</script>
<template>
  <div class="w-full">
    <h1 class="text-lg sm:text-2xl !font-semibold">
      Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s
      1scentury BC text De Finibus Bonorum et Malorum.
    </h1>
    <p class="text-gray-700 text-sm !mt-2">20/05/2025</p>

    <br />
    <br />
    <p>
      Until recently, the prevailing view assumed lorem ipsum was born as a
      nonsense text. “It’s not Latin, though it looks like it, and it actually
      says nothing,” Before & After magazine answered a curious reader, “Its
      ‘words’ loosely approximate the frequency with which letters occur in
      English, which is why at a glance it looks pretty real. Until, the
      prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not
      Latin, though it looks like it, and it actually says nothing,” Before &
      After magazine answered a curious reader, “Its ‘words’ loosely approximate
      the frequency with which letters occur in English, which is why at a
      glance it looks pretty real.
    </p>
    <br />
    <p>
      Until recently, the prevailing view assumed lorem ipsum was born as a
      nonsense text. “It’s not Latin, though it looks like it, and it actually
      says nothing,” Before & After magazine answered a curious reader, “Its
      ‘words’ loosely approximate the frequency with which letters occur in
      English, which is why at a glance it looks pretty real. Until, the
      prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not
      Latin, though it looks like it, and it actually says nothing,” Before &
      After magazine answered a curious reader, “Its ‘words’ loosely approximate
      the frequency with which letters occur in English, which is why at a
      glance it looks pretty real.
    </p>
    <br />
    <p>
      Until recently, the prevailing view assumed lorem ipsum was born as a
      nonsense text. “It’s not Latin, though it looks like it, and it actually
      says nothing,” Before & After magazine answered a curious reader, “Its
      ‘words’ loosely approximate the frequency with which letters occur in
      English, which is why at a glance it looks pretty real. Until, the
      prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not
      Latin, though it looks like it, and it actually says nothing,” Before &
      After magazine answered a curious reader, “Its ‘words’ loosely approximate
      the frequency with which letters occur in English, which is why at a
      glance it looks pretty real.
    </p>
    <br />
      
    <div class="w-full !mt-5 flex items-center gap-2">
        <RouterLink to="/moments/item/edit" class="px-16 py-4 bg-others2 text-white rounded-xl text-sm">Edit</RouterLink>
        <button @click="confirmDelete" class="px-16 py-4 bg-others1 text-white rounded-xl text-sm">Delete</button>
    </div>
    <div v-if="showConfirm" class="fixed inset-0 flex items-center justify-center bg-black/50">
    <div class="bg-white p-6 rounded shadow-lg">
      <p>Are you sure you want to delete?</p>
      <div class="mt-4 flex justify-end">
        <button @click="deleteItem" class="bg-red-500 text-white px-4 py-2 rounded">OK</button>
        <button @click="showConfirm = false" class="ml-2 px-4 py-2 border rounded">Cancel</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import Layout from "./layout/Layout.vue";
import useAuth from './lib/feats/authSlice.js'

const { loadUser } = useAuth();

const route = useRoute();
const router = useRouter();
onMounted(() => {
  const res = loadUser();
  if(res.error){
    if (route.name !== "login" && route.name !== "register") {
      router.push({ name: "login" });
    }
  }
});

</script>

<template>
  <Layout>
    <RouterView/>
  </Layout>
</template>



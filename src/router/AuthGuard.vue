<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";

// Store Imports
import { useAuthStore } from "@/hooks/store";
import { useRouter } from "vue-router";
import { useAcl, defineAbilityFor } from "@/configs/acl";

// Firebase Imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/api/firebase";

const router = useRouter();
const authStore = useAuthStore();
const acl = useAcl();

Vue.watchPostEffect((onCleanup) => {
  const unsubscribe = onAuthStateChanged(
    getAuth(app),
    () => {
      authStore.update();
    },
    (error) => {
      console.error(error);
    }
  );

  onCleanup(() => {
    unsubscribe();
  });
});

Vue.watchPostEffect(async () => {
  const route = Vue.unref(router.currentRoute);
  const auth = authStore.value.auth;

  acl.update(defineAbilityFor(auth.currentUser ? "admin" : "").rules);

  switch (route.meta.auth) {
    case "guest":
      if (auth.currentUser) {
        await router.replace({ name: "home" });
      }
      break;

    case "none":
      break;

    case "auth":
    default:
      // Not logged in
      if (!auth.currentUser) {
        await router.replace({ name: "401" });
        break;
      }

      // Can access route
      if (
        acl.can(
          String(route.meta.aclAction || "read"),
          String(route.meta.aclSubject || "fallback")
        )
      ) {
        break;
      }

      // Can not access route
      await router.replace({ name: "403" });
  }
});
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>

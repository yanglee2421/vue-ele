// Acl Imports
import { defineAbilityFor } from "./define-ability-for";
import { provideAbility } from "@casl/vue";

// Store Imports
import { useStoreLogin } from "@/hooks";

// Vue Imports
import { watchPostEffect } from "vue";

export function useAclProvider() {
  // Acl Hooks
  const { state } = useStoreLogin();
  const acl = defineAbilityFor(state.usr?.role || "");
  provideAbility(acl);

  watchPostEffect(() => {
    const role = state.usr?.role;
    const { rules } = defineAbilityFor(role || "");
    acl.update(rules);
  });
}

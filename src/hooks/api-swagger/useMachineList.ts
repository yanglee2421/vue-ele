//
import { get_machine_list } from "@/api/swagger";
import { useQuery } from "@tanstack/vue-query";
import * as Vue from "vue";
import { Res } from "@/api/swagger/get_machine_list";

export function useMachineList(brandIdRef: Vue.Ref<string>) {
  return useQuery<Res>({
    queryKey: ["get_machine_list", brandIdRef],
    queryFn({ signal }) {
      return get_machine_list({ signal }, Vue.unref(brandIdRef));
    },

    enabled: Vue.computed(() => !!Vue.unref(brandIdRef)),
  });
}
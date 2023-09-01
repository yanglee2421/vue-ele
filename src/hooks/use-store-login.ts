import { defineStore } from "pinia";
import { reactive, readonly } from "vue";

type Dispatch = (state: State) => void;

export const useStoreLogin = defineStore(
  "login",
  () => {
    // State && Dispatch
    const state = reactive<State>({
      usr: null,
    });
    const setState = (dispatch: Dispatch) => {
      dispatch(state);
    };

    return { state: readonly(state), setState };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);

interface State {
  usr: Usr | null;
}

interface Usr {
  role: string;
}

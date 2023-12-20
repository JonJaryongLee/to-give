import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const name = ref("david");
  const age = ref(10);

  const doubleAge = computed(() => age.value * 2);

  function changeName(newName) {
    name.value = newName;
  }
  function changeAge(newAge) {
    age.value = newAge;
  }

  return { name, age, doubleAge, changeName, changeAge };
});

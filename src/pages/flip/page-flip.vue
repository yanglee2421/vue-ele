<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

const boxRef = Vue.ref<HTMLDivElement>();

const handleSort = () => {
  const container = Vue.unref(boxRef);
  if (!container) return;

  record(container);
  change(container);
  play(container);
};

function record(container: Element | null) {
  if (!container) return;

  for (let i = 0, len = container.children.length; i < len; i++) {
    const dom = container.children[i];
    const rect = dom.getBoundingClientRect();
    Reflect.set(dom, "startX", rect.left);
    Reflect.set(dom, "startY", rect.top);
  }
}

function change(container: Element | null) {
  if (!container) return;

  const childrens = [...container.children];
  for (let i = 0, l = childrens.length; i < l; i++) {
    const children = childrens[i];
    const j = Math.floor(Math.random() * l);
    if (i !== j) {
      // 获取当前dom的下一个元素
      const inextDom = children.nextElementSibling;
      // 把i插入j之前
      container.insertBefore(children, childrens[j]);
      // 把下标j的元素插入到i元素之前
      container.insertBefore(childrens[j], inextDom);
    }
  }
}

function play(container: Element | null) {
  if (!container) return;

  for (let i = 0, len = container.children.length; i < len; i++) {
    const dom = container.children[i];
    const { left, top } = dom.getBoundingClientRect();

    const startX = Reflect.get(dom, "startX");
    const startY = Reflect.get(dom, "startY");

    dom.animate(
      [
        {
          transform: `translate(${startX - left}px, ${startY - top}px)`,
        },
        { transform: `translate(0px, 0px)` },
      ],
      { duration: 600 }
    );
  }
}

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="text-center">
    <el-button
      @click="handleSort"
      size="large"
      type="primary"
      class="bg-sky-500 uppercase"
      id="sort"
      >random order</el-button
    >
  </div>
  <div
    ref="boxRef"
    class="p-2 overflow-hidden mx-auto mt-6 border flex gap-2 flex-wrap"
  >
    <div
      v-for="item in 50"
      :key="item"
      class="basis-1/6 sm:basis-1/12 flex-1 bg-red-300 flex justify-center items-center h-16 border rounded text-white text-2xl"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

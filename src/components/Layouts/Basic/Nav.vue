<template>
  <div class="bg-gray-100 h-screen flex items-center flex-col">
    <div class="">
      <router-link to="/">
        <img class="mt-10 ml-20 mr-28" src="/logo-ANSWER.svg" alt=""
      /></router-link>

      <ul class="flex flex-col gap-2 justify-center mt-8">
        <li
          v-for="item in navItems"
          :key="item.path"
          :class="{
            'flex items-center gap-2 cursor-pointer ': true,
            'p-2': true, // 添加 padding
            'bg-primary text-white-light': $route.path === item.path, // 选中效果
            'bg-gray-100': $route.path !== item.path,
          }"
        >
          <router-link :to="item.path">
            <div class="flex items-center gap-2 w-full">
              <div
                v-if="$route.path === item.path"
                class="w-1 h-8"
                :class="{
                  'bg-primary': $route.path === item.path,
                  'bg-transparent': $route.path !== item.path,
                }"
              ></div>
              <span class="material-icons">{{ item.icon }}</span>
              <label>{{ item.label }}</label>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="flex-1"></div>
    <div class="flex justify-around w-10/12">
      <img class="rounded-full w-10 h-10" src="/andychen.jpeg" alt="" />

      <div class="flex flex-col">
        <span> Ray Chen </span>
        <span>ray.10315332@mail.com</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const navItems = ref([
  {
    label: "Dashboard",
    icon: "home",
    path: "/Dashboard",
  },
  {
    label: "收入管理",
    icon: "help_outline",
    path: "/Question",
  },
  {
    label: "预算管理",
    icon: "assignment",
    path: "/Assignment",
  },
  {
    label: "支出管理",
    icon: "menu_book",
    path: "/Course",
  },
  {
    label: "儲蓄計畫",
    icon: "admin_panel_settings",
    path: "/Admin",
  },
  {
    label: "財務報告",
    icon: "settings",
    path: "/Setting",
  },
]);
</script>

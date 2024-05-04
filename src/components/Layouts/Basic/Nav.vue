<template>
  <div class="bg-gray-100 h-full flex items-center flex-col">
    <div class="h-screen">
      <img class="mt-10 ml-20 mr-28" src="/logo-ANSWER.svg" alt="" />

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

      <!-- <ul class="flex flex-col gap-2 justify-center mt-8">
        <li class="flex items-center gap-2">
          <router-link to="/Dashboard">
            <div>
              <div class="w-2 outline inline-block h-full bg-black"></div>
              <span class="material-icons">home</span>
              <label>Dashboard</label>
            </div>
          </router-link>
        </li>
        <li class="flex items-center gap-2">
          <router-link to="/Question">
            <span class="material-icons">help_outline</span> Question
          </router-link>
        </li>
        <li class="flex items-center gap-2">
          <router-link to="/Assignment">
            <span class="material-icons">assignment</span> Assignment
          </router-link>
        </li>
        <li class="flex items-center gap-2">
          <router-link to="/Course">
            <span class="material-icons">menu_book</span> Course
          </router-link>
        </li>
        <li class="flex items-Admin gap-2">
          <router-link to="/Dashboard">
            <span class="material-icons">admin_panel_settings</span> Admin
          </router-link>
        </li>
        <li class="flex items-center gap-2">
          <router-link to="/Setting">
            <span class="material-icons">settings</span> Settings
          </router-link>
        </li>
      </ul> -->
    </div>
    <div class="flex justify-around w-full">
      <img class="rounded-full w-10 h-10" src="/andychen.jpeg" alt="" />

      <div class="flex flex-col">
        <span> Andy Chen </span>
        <span>andy0401@mail.com</span>
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
    label: "Question",
    icon: "help_outline",
    path: "/Question",
  },
  {
    label: "Assignment",
    icon: "assignment",
    path: "/Assignment",
  },
  {
    label: "Course",
    icon: "menu_book",
    path: "/Course",
  },
  {
    label: "Admin",
    icon: "admin_panel_settings",
    path: "/Admin",
  },
  {
    label: "Settings",
    icon: "settings",
    path: "/Setting",
  },
]);
</script>

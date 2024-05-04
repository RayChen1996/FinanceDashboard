<template>
  <div class="flex justify-between my-3 container w-11/12">
    <div class="flex gap-2 items-center">
      <h2 class="text-2xl">Admin</h2>
      <button
        class="btn hover:bg-gray-100 flex justify-center items-center gap-2"
        type="button"
        @click="openModal"
      >
        <span class="material-icons">add</span>Add New Admin
      </button>
    </div>
    <div class="flex gap-4">
      <span class="material-icons">notifications_active</span>
      <span class="material-icons">search</span>
    </div>
  </div>

  <dialog id="my_modal_1" class="modal">
    <div class="modal-box bg-white-light rounded-none">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-lg">Edit Admin</h3>
        <div class="modal-action">
          <form method="dialog">
            <button class=" ">
              <span class="material-icons">close</span>
            </button>
          </form>
        </div>
      </div>

      <div class="modal-action">
        <button className="btn">更新</button>

        <form method="dialog">
          <button className="btn">取消</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup>
const openModal = () => {
  const modal = document.getElementById("my_modal_1");
  if (modal) {
    modal.showModal();
  }
};
</script>

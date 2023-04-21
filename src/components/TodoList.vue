<template>
  <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >
    <v-card-text>
      <v-row justify="center">
        <p class="ml-8">
          <v-btn size="x-small" variant="text" color="indigo" @click="showAll()"
            >Pending Task</v-btn
          >
        </p>
        <p class="ml-8">
          <v-btn size="x-small" variant="text" color="green" @click="showCompleted()"
            >Completed</v-btn
          >
        </p>
        <p class="ml-8">
          <v-btn size="x-small" variant="text" color="red" @click="showDeleted()"
            >Deleted</v-btn
          >
        </p>
      </v-row>

      <v-col v-if="alltask" cols="12" v-for="item in items.items" :key="item.id">
        <v-row class="mt-2" justify="space-between">
          <v-text-field
            variant="underlined"
            v-model="item.task"
            class="text-indigo ml-4"
            @keypress.enter="editTask(item.task, item.id)"
            >{{ item.id }} -</v-text-field
          >

          <!-- botones -->
          <div class="mr-6">
            <v-btn
              variant="text"
              color="indigo"
              size="x-small"
              @click="editTask(item.task, item.id)"
            >
              <v-icon>mdi-pencil</v-icon>
              <v-tooltip activator="parent" location="top">Edit</v-tooltip>
            </v-btn>
            <v-btn
              color="green"
              variant="text"
              size="x-small"
              @click="completedItem(item.id)"
            >
              <v-icon>mdi-check-all</v-icon>
              <v-tooltip activator="parent" location="top">Complete</v-tooltip>
            </v-btn>
            <v-btn variant="text" color="red" size="small" @click="deleteItem(item.id)">
              <v-icon>mdi-delete</v-icon>
              <v-tooltip activator="parent" location="top">Delete</v-tooltip>
            </v-btn>
          </div>
        </v-row>
      </v-col>
      <!-- completed task -->
      <v-col
        v-if="completedTask"
        cols="12"
        v-for="item in itemsCompleted.itemsCompleted"
        :key="item.id"
      >
        <v-row class="mt-2" justify="space-between">
          <h6 class="text-green text-h5 ml-4">{{ item.task }}</h6>
        </v-row>
      </v-col>
      <v-row v-if="completedTask" class="mt-6 ml-4" justify="start">
        <v-btn
          v-if="completedTask"
          color="red"
          size="x-small"
          rounded="lg"
          @click="localStorage.removeItem('completed-items')"
          >Clean Completed</v-btn
        >
      </v-row>

      <!-- deleted task -->
      <v-col
        v-if="deletedTask"
        cols="12"
        v-for="item in itemsDeleted.itemsDeleted"
        :key="item.id"
      >
        <v-row class="mt-2" justify="space-between">
          <h6 class="text-red text-h5 ml-4">{{ item.task }}</h6>
        </v-row>
      </v-col>
      <v-row v-if="deletedTask" class="mt-6 ml-4" justify="start">
        <v-btn
          size="x-small"
          rounded="lg"
          color="red"
          @click="localStorage.removeItem('deleted-items')"
          >Clean Deleted</v-btn
        >
      </v-row>

      <v-row class="mt-10 mb-4 mr-4" justify="end">
        <v-btn color="red" @click="removeAll()" elevation="12" rounded="lg" size="x-small"
          >Eliminar todo</v-btn
        >
      </v-row>
      <p class="text-center">Enter a task</p>
      <v-row justify="space-between" class="mb-4 mt-4 mr-4 ml-4">
        <v-text-field
          v-model="inputLabel"
          clearable
          variant="underlined"
          @keypress.enter="newTask()"
        ></v-text-field>
        <v-btn
          class="mt-4 ml-2"
          size="x-small"
          rounded="lg"
          color="green"
          e
          @click="newTask()"
          >Add New Task</v-btn
        >
      </v-row>
    </v-card-text>
  </v-card>
  <v-snackbar v-model="snakAlert" timeout="3000" color="red" location="top"
    >The task already exist in task list</v-snackbar
  >
</template>

<script setup>
import { reactive, ref } from "vue"
const inputLabel = ref("")
const items = reactive({ items: [] })
const itemsDeleted = reactive({ itemsDeleted: [] })
const itemsCompleted = reactive({ itemsCompleted: [] })
const alltask = ref(true)
const completedTask = ref(false)
const deletedTask = ref(false)
const snakAlert = ref(false)

const init = () => {
  items.items = JSON.parse(localStorage.getItem("todo-list"))
  itemsDeleted.itemsDeleted = JSON.parse(localStorage.getItem("deleted-items"))
  itemsCompleted.itemsCompleted = JSON.parse(localStorage.getItem("completed-items"))
  if (items.items == null) items.items = []
  if (itemsDeleted.itemsDeleted == null) itemsDeleted.itemsDeleted = []
  if (itemsCompleted.itemsCompleted == null) itemsCompleted.itemsCompleted = []
  // console.log("init", items.items)
}
const newTask = () => {
  let exist = false
  items.items.forEach((item) => {
    if (item.task == inputLabel.value) {
      exist = true
    }
  })
  if (!exist) {
    items.items.push({ task: inputLabel.value, id: items.items.length + 1 })
    localStorage.setItem("todo-list", JSON.stringify(items.items))
  } else {
    snakAlert.value = true
  }
  inputLabel.value = ""
}

const removeAll = () => {
  localStorage.clear()
  init()
}

const deleteItem = (id) => {
  items.items.forEach((item, index) => {
    if (item.id == id) {
      itemsDeleted.itemsDeleted.push({ task: item.task, id: item.id })
      items.items.splice(index, 1)
    }
  })
  localStorage.setItem("deleted-items", JSON.stringify(itemsDeleted.itemsDeleted))
  localStorage.setItem("todo-list", JSON.stringify(items.items))
}

const editTask = (value, id) => {
  items.items.forEach((item, index) => {
    if (item.id == id) {
      items.items[index].task = value
    }
  })
  localStorage.setItem("todo-list", JSON.stringify(items.items))
}

const completedItem = (id) => {
  items.items.forEach((item, index) => {
    if (item.id == id) {
      itemsCompleted.itemsCompleted.push({ task: item.task, id: item.id })
      items.items.splice(index, 1)
    }
  })
  localStorage.setItem("completed-items", JSON.stringify(itemsCompleted.itemsCompleted))
  localStorage.setItem("todo-list", JSON.stringify(items.items))
}

const showAll = () => {
  alltask.value = true
  completedTask.value = false
  deletedTask.value = false
}

const showCompleted = () => {
  alltask.value = false
  completedTask.value = true
  deletedTask.value = false
}

const showDeleted = () => {
  alltask.value = false
  completedTask.value = false
  deletedTask.value = true
}
init()
</script>

<style></style>

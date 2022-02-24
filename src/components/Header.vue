<template>
  <div id="Header" class="container-fluid">
    <div id="Header" class="mainbox mt-3">
      <div class="title withoutline">
        My Task Manager
        <div class="right">
          <button
            class="btn btn-outline-primary mr-2"
            v-if="getTasks && getTasks.length > 0"
            @click="$bvModal.show('CreateSubtaskModal')"
          >
            <i class="fas fa-plus mr-2"></i> Create a Subtask
          </button>
          <button
            class="btn btn-primary mr-2"
            @click="$bvModal.show('CreateTaskModal')"
          >
            <i class="fas fa-plus mr-2"></i> Create a Task
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {getAll} from '../services/service'

export default {
  name: "Header",
  computed: {
    ...mapGetters("task", ["getTasks"]),
  },
  mounted() {
    console.log(getAll())
  }
};
</script>
<style scoped>
</style>
<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isVisible" class="modal-overlay">
        <div class="modal-container">
          <div class="modal-content">
            <h2 class="modal-title">Welcome to Libre Assistant</h2>
            <p class="modal-description">What should we call you?</p>
            
            <form @submit.prevent="handleSubmit" class="name-form">
              <input
                v-model="userName"
                type="text"
                placeholder="Enter your name"
                class="name-input"
                autofocus
                required
              />
              <button type="submit" class="submit-button" :disabled="!userName.trim()">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  settingsManager: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);

const userName = ref('');

const handleSubmit = async () => {
  if (!userName.value.trim()) return;
  
  props.settingsManager.settings.user_name = userName.value;
  await props.settingsManager.saveSettings();
  
  userName.value = '';
  emit('close');
};

watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    userName.value = '';
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 1rem;
}

.modal-content {
  background-color: var(--bg-primary-light);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.dark .modal-content {
  background-color: var(--bg-primary-dark);
}

.modal-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary-light);
}

.dark .modal-title {
  color: var(--text-primary-dark);
}

.modal-description {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  color: var(--text-secondary-light);
}

.dark .modal-description {
  color: var(--text-secondary-dark);
}

.name-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.name-input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 1rem;
  background-color: var(--bg-secondary-light);
  color: var(--text-primary-light);
  transition: all 0.2s ease;
}

.dark .name-input {
  border-color: var(--border-dark);
  background-color: var(--bg-secondary-dark);
  color: var(--text-primary-dark);
}

.name-input:focus {
  outline: none;
  border-color: var(--accent-light);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.dark .name-input:focus {
  border-color: var(--accent-dark);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.submit-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--accent-light);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dark .submit-button {
  background-color: var(--accent-dark);
}

.submit-button:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .modal-content {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }
}
</style>

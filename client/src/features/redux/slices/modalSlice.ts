import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  isOpen: boolean;
  modalType: string | null; // Добавляем поле modalType
};

const initialState: ModalState = {
  isOpen: false,
  modalType: null, // Инициализируем его как null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      // Обновляем openModal, чтобы принимать строковый параметр
      state.isOpen = true;
      state.modalType = action.payload; // Сохраняем тип модального окна
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null; // Обнуляем тип модального окна при закрытии
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

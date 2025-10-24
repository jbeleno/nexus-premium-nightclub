import { create } from 'zustand'

export const useUIStore = create((set) => ({
  // Loading states
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  // Modal states
  isModalOpen: false,
  modalContent: null,
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),

  // Mobile menu
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Scroll lock (para modales)
  scrollLocked: false,
  lockScroll: () => {
    document.body.style.overflow = 'hidden'
    set({ scrollLocked: true })
  },
  unlockScroll: () => {
    document.body.style.overflow = 'unset'
    set({ scrollLocked: false })
  }
}))


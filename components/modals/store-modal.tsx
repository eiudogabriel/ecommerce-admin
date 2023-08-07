"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store title"
      description="Create Store desc"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Create store modal
    </Modal>
  );
};

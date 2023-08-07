"use client";

import { useEffect, useState } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])
  
  const handleCloseModal = () => {
    //TODO: HANDLE CLOSE THE MODAL
  }

  return (
    <div className="flex flex-col h-full gap-y-3 pt-2 justify-center items-center">
      root page
    </div>
  );
}

export default SetupPage;

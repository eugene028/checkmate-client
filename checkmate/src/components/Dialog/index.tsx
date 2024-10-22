"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef, useEffect } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
  style?: CSSProperties;
  className?: string;
}

const Modal = forwardRef(({ children, onClose, ...rest }: ModalProps) => {
  const router = useRouter();

  const handleClose = onClose || router.back;
  const modal = useClickOutside<HTMLDivElement>(handleClose);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <BackDropStyle>
      <DialogStyle ref={modal} {...rest}>
        {children}
      </DialogStyle>
    </BackDropStyle>
  );
});

const DialogStyle = styled.div`
  display: flex;
  width: 18.75rem;
  height: 12.5rem;
  display: flex;
  margin: 0 auto;
  top: 40%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  background-color: white;
`;

const BackDropStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;

import Modal from "@/components/Dialog";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const CheckModal = () => {
  return (
    <Modal>
      <div>음식 등록하기</div>
      <div>카메라를 통해 간편하게 섭취한 음식을 등록할 수 있어요.</div>

      <Button>직접 등록</Button>
      <Button>카메라로 등록</Button>
    </Modal>
  );
};

export default CheckModal;

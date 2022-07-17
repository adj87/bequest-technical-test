import { Modal } from "components/Modal";

interface PostCodeModalProps {
  onCancel: () => void;
}

export const PostCodeModal: React.FC<PostCodeModalProps> = (props) => {
  const { onCancel } = props;
  return (
    <Modal
      open={true}
      title="Search by postcode"
      onCancel={onCancel}
      onOk={onCancel}
      size="md"
    >
      Hiiiii there
    </Modal>
  );
};

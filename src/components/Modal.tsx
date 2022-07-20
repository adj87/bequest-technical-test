import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";

interface ModalButtonProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  size?: "sm" | "md" | "lg";
}

export const Modal: React.FC<ModalButtonProps> = (props) => {
  const [modalDiv, setModalDiv] = useState<null | HTMLDivElement>(null);
  const { children, title, onOk, onCancel, size = "lg" } = props;
  const sizes = { sm: "max-w-xl", md: "max-w-2xl", lg: "max-w-3xl" };

  useEffect(() => {
    const modalDiv = document.createElement("div");
    modalDiv.className = "fixed inset-0 z-40 modal-bg-color";
    document.body.appendChild(modalDiv);
    setModalDiv(modalDiv);
    return () => modalDiv.remove();
  }, []);

  return modalDiv
    ? ReactDOM.createPortal(
        <>
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 md:h-full flex max-h-screen"
          >
            <div
              className={`relative w-full h-full ${sizes[size]} p-4 h-auto m-auto`}
            >
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow">
                {/* Modal header */}
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="defaultModal"
                    onClick={(): void => onCancel()}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* Modal body */}
                <div
                  className="p-4 space-y-6 overflow-x-auto"
                  style={{ maxHeight: "calc(100vh - 168px)" }}
                >
                  {children}
                </div>
                {/* Modal footer */}
                <div className="flex items-center justify-end p-4 space-x-2 border-t border-gray-200 rounded-b">
                  <Button
                    text="Cancel"
                    color="white"
                    onClick={(): void => onCancel()}
                  />
                  <Button text="Save" onClick={(): void => onOk()} />
                </div>
              </div>
            </div>
          </div>
        </>,
        modalDiv
      )
    : null;
};

// AnyComponent.tsx
import { usePopup } from './PopupContext';
import PopupComponent from './PopupComponent';

const AnyComponent: React.FC = () => {
  const { isPopupOpen, openPopup, closePopup } = usePopup();

  const customContent = (
    <div>
      <p>This is a custom content for this specific popup.</p>
      <p>Feel free to adjust it based on your needs.</p>
    </div>
  );

  return (
    <div>
      <button onClick={() => openPopup()}>Open Popup</button>
      {isPopupOpen && <PopupComponent onClose={closePopup} />}
    </div>
  );
};

export default AnyComponent;

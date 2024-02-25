import Styles from "./Overlay.module.css";

export const Overlay = (props) => {

  return (
    <div
      className={`${Styles["overlay"]} ${props.isOpened==true && Styles["overlay_is-opened"]}`}
    >
    </div>
  );
};

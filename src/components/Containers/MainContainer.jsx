// styles
import styels from "../../styles/Containers/MainContainer.module.scss";

function MainContainer({ children, optionClass }) {
  return <div className={`${styels.container} ${optionClass}`}>{children}</div>;
}

MainContainer.defaultProps = {
  optionClass: undefined,
};

export default MainContainer;

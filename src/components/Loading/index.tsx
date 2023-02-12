import { Size } from "../../utils/types";
import './styles.scss';

function Loading({width, height}: Size) {
  const style = {
    width,
    height,
    borderRadius: '50%'
  }

  return (
    <div style={style} className="loading"></div>
  );
}

export default Loading;
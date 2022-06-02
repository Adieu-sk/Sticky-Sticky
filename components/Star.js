import { RiStarSFill } from "react-icons/ri";

export default function Star({ selected = false, onSelect = (f) => f }) {
  return (
    <RiStarSFill color={selected ? "#ff6347" : "#808080"} onClick={onSelect} />
  );
}

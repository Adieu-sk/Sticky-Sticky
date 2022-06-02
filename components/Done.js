import { MdOutlineDoneOutline } from "react-icons/md";

export default function Done({ selected = false, onSelect = (f) => f }) {
  return (
    <MdOutlineDoneOutline
      color={selected ? "#ff6347" : "#808080"}
      onClick={onSelect}
    />
  );
}

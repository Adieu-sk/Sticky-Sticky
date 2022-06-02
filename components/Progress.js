import { GiProgression } from "react-icons/gi";

export default function Progress({ selected = false, onSelect = (f) => f }) {
  return (
    <GiProgression
      color={selected ? "#ff6347" : "#808080"}
      onClick={onSelect}
    />
  );
}

function Thumbnail({ src, onSelect, isSelected }) {
  return (
    <div
      className={`thumbnail ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(src)}
    >
      <img src={src} alt="thumbnail" width="100%" />
    </div>
  );
}

export default Thumbnail;
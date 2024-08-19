import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ items }) {
  return (
    <ul className={css.container}>
      {items.map(({ id, urls: { regular, small }, alt_description }) => (
        <li key={id} className={css.wrap}>
          <ImageCard src={small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}

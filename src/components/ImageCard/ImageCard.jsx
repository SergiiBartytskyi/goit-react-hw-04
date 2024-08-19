export default function ImageCard({ alt, src }) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}

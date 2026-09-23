// O componente agora aceita o link (src) e a descrição (alt) como parâmetros
export default function Profile({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: '150px', height: '150px', borderRadius: '8px', objectFit: 'cover' }}
    />
  );
}
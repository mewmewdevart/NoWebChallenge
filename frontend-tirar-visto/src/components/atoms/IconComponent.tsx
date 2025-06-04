interface IconComponentProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  ariaHidden?: boolean;
  className?: string;
}

function IconComponent({
  src,
  alt,
  width = "24",
  height = "24",
  loading = "lazy",
  ariaHidden = true,
  className,
}: IconComponentProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      aria-hidden={ariaHidden}
      className={className}
    />
  );
}
export default IconComponent;
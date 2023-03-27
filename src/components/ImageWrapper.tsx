type Props = {
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  style?: React.CSSProperties;
};

export default function ImageWrapper(props: Props) {
  const { width, height, children, style } = props;
  return (
    <div
      className="imageWrapper"
      style={{ width: width, height: height, ...style }}
    >
      {children}
    </div>
  );
}

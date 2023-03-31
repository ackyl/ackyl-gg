type Props = {
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  className: string;
};

export default function ImageWrapper(props: Props) {
  const { width, height, children, className } = props;
  return (
    <div
      className={"imageWrapper " + className}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
}

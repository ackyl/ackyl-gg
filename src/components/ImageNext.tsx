import Image, { ImageProps } from "next/image";
import { useState } from "react";

import SkeletonLoader from "./SkeletonLoader";

export default function ImageNext(props: ImageProps) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && <SkeletonLoader />}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        fill={true}
        unoptimized={true}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </>
  );
}

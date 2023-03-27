import React from 'react';
import ContentLoader from 'react-content-loader';

export default function SkeletonLoader() {
  return (
    <ContentLoader
      uniqueKey="products"
      className="skeletonLoader"
      width={'100%'}
      height={'100%'}
      viewBox={`0 0 100 100`}
      backgroundColor="#CDD0D1"
      foregroundColor="#dedede"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );
}

import ContentLoader from "react-content-loader";

type SkeletonProps = {
  width: number | string;
  height: number | string;
};
function Skeleton({ width, height }: SkeletonProps) {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor="#10171E"
      foregroundColor="#38444d"
    >
      <rect x="0" y="0" rx="6" ry="6" width="100%" height="100%" />
    </ContentLoader>
  );
}

export default Skeleton;

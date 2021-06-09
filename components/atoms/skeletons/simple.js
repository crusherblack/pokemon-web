import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonCardComponent = () => {
  return (
    <div
      style={{
        padding: "10px",
        width: "100%",
      }}
    >
      <Skeleton variant="wave" width="100%" height={120} />
    </div>
  );
};

export default SkeletonCardComponent;

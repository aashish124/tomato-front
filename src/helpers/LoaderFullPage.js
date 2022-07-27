import CircularProgress from "@material-ui/core/CircularProgress";

const LoaderFullPage = ({ message }) => {
  return (
    <div style={loaderStyle.fullpage} className="container">
      <CircularProgress size="10rem" thickness={1.5} />
      <p className="mt-5">{message}</p>
    </div>
  );
};

const loaderStyle = {
  fullpage: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default LoaderFullPage;

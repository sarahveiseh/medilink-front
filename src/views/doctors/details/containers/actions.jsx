export const Actions = (props) => {
  switch (props.role) {
    case "admin":
      return <div>Delete</div>;
    case "patient":
      return props?.isOwnDoctor ? <div>chat</div> : null;
    default:
      return null;
  }
};

export const Actions = (props) => {
  switch (props?.role) {
    case "admin":
      return <div>delete this patient</div>;
    default:
      return null;
  }
};

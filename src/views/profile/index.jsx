const Index = () => {
  const role = "admin";
  switch (role) {
    case "admin":
      return <div>admin</div>;
    default:
      return null;
  }
};

export default Index;

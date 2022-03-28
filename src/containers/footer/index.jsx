export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full px-4 right-5">
      <p className="flex flex-row-reverse">
        <span>&copy; {1900 + new Date().getYear()} Medlink</span>
      </p>
    </footer>
  );
};

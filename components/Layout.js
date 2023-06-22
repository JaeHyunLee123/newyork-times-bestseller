import NavigationBar from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
    </>
  );
}

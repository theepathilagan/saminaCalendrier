import NavBar from './NavBar';

function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;
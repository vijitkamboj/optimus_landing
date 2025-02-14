import { NavBar } from "~/components/layout/navbar";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default RootLayout;

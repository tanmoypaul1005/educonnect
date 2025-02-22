import CustomLayout from "@/components/layout/CustomLayout";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomLayout>
        {children}
      </CustomLayout>
    </div>
  );
};
export default MainLayout;

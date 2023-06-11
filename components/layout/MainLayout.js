import LayoutHeader from './layout-header';
const MainLayout = (props) => {
  return (
    <div>
      <LayoutHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default MainLayout;

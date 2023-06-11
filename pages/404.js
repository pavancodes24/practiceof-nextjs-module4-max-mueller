import { useRouter } from 'next/router';
const PageNotFound = () => {
  const router = useRouter();
  console.log(router.pathname, router.query, 'testing');
  return <h1>Page Not Found </h1>;
};

export default PageNotFound;

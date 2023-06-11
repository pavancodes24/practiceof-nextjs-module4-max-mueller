import { useRouter } from 'next/router';
import Link from 'next/link';
const SlugPage = () => {
  const router = useRouter();
  console.log(router.query, 'slugquery');
  return (
    <>
      <div>This is slug page which is having a dynamic paths</div>
      <Link href="/">Go to Home Page</Link>
      <button onClick={() => router.push('/')}>
        home index page using button
      </button>
    </>
  );
};

export default SlugPage;

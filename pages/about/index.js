import { useRouter } from 'next/router';

export default function AboutPage() {
  const router = useRouter();
  console.log(router.query, router.pathname, 'testing');
  return <h1>This is about page</h1>;
}

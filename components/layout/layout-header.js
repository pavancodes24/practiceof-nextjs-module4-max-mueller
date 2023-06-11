import { useRouter } from 'next/router';

const LayoutHeader = () => {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1 onClick={() => router.push('/')}>Home</h1>
      <h1>Menu</h1>
    </div>
  );
};

export default LayoutHeader;

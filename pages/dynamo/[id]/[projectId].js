import { useRouter } from 'next/router';

const DynamoProjectId = () => {
  const router = useRouter();
  console.log(router.pathname, router.query, router);
  return <div>This is project Id of dynamo</div>;
};

export default DynamoProjectId;

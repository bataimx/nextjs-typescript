import { useRouter } from 'next/router';

export default function product() {
  const {
    query: { id: productId },
  } = useRouter();

  fetch(`/api/hello`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
  return <div>{`Product page id: ${productId}`}</div>;
}

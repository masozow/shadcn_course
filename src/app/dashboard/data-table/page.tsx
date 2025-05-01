import { payments } from "@/data/payments.data";

const fetchData = async () => {
  return payments;
};

const Page = async () => {
  const data = await fetchData();

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Page;

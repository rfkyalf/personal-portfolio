export default async function page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  return <div className="mt-96">{slug}</div>;
}

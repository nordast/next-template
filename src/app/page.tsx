import { Card, CardBody } from "@nextui-org/card";

export default async function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">Next.js Template</h1>
        <p className="mt-4 text-xl">A simple starter for Next.js</p>
      </CardBody>
    </Card>
  );
}

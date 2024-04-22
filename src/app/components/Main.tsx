import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"

type Item = {
  title: string
  name: string
  img: string
}

export const Main = () => {
  const items = Array(10).fill({
    title: "カワセミ",
    name: "kawasemi",
    img: "/kawasemi.jpg"
  });

  return (
  <div className="flex justify-center mt-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item: Item, index) => (
        <Card key={index}>
          <CardBody>
            <Image
              src={item.img}
              alt={item.name}
              height={200}
              width={200}
            />
          </CardBody>
          <CardFooter className="font-bold">
            <p>{item.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    <div>aa</div>
    </div>
  )
}

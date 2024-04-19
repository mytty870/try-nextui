import { Card, CardBody, Image } from "@nextui-org/react"
import { isMap } from "util/types"
import { CustomButton } from "./CustomButton"

type Item = {
  id: number
  title: string
  img: string
}

export const Main = () => {
  const items = [
    {
      id: 1,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 2,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 3,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 4,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 5,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 6,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 7,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 8,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 9,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 10,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 11,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 12,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 13,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 14,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 15,
      title: "今日は鳥を見たよ",
      img: "img/DSC049942.JPG"
    },
    {
      id: 16,
      title: "今日は鳥を見たよ",
      img: "../img/DSC049942.JPG"
    }
  ]
  return (
  <div className="flex justify-center mt-8">
    <CustomButton>ぼたんだよaa</CustomButton>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item: Item) => (
        <Card key={item.id} className="max-w-[100px]">
          <CardBody>
            <Image
              src={item.img}
              alt={item.title}
              width="100%"
              height="100%"
              className="h-[140px]"
            />
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  )
}

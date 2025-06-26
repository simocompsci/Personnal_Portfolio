import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,

  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },

];

const Hobbies = [
  {
    title: 'Bodybuilding',
    emoji: '',
    left: "15%",
    top: "70%",
  },
  {
    title: 'Football',
    emoji: '',
    left: "8%",
    top: "40%",
  },
  {
    title: 'Music',
    emoji: '',
    left: "65%",
    top: "75%",
  },
  {
    title: 'Gaming',
    emoji: '',
    left: "6%",
    top: "55%",
  },
  {
    title: 'Anime and Manga',
    emoji: '',
    left: "42%",
    top: "55%",
  },
  {
    title: 'Reading',
    emoji: '',
    left: "55%",
    top: "40%",
  },
]


export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who i am , what i do and what inspires me " />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools used to create digital experience"
                
              />
              <ToolBoxItems Items={toolboxItems} className="text-white" itemsWrapperClassName="animate-move-left [animation-duration:15s]"/>
              <ToolBoxItems
                Items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-4">
            <Card className="h-[320px] p-0 flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond The Code" description="Explore my interests and hobbies beyond the code" className="px-6 py-6" />


              <div className="flex-1">
                {Hobbies.map((Hobby) => (
                  <div key={Hobby.title} className="inline-flex items-center gap-2 px-6 bg-white rounded-full py-1.5 absolute"
                    style={{
                      left: Hobby.left,
                      top: Hobby.top,
                    }}>
                    <span className="font-medium text-gray-950">{Hobby.title}</span>
                    <span>{Hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0  after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-white -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-white -z-10"></div>
                <Image src={smileMemoji} alt="smile memoji" className="size-20" />

              </div>

            </Card>
          </div>
        </div>

      </div>
    </div>
  )
};

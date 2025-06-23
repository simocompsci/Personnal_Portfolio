import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import { title } from "process";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import TechIcon from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'

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

]


export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who i am , what i do and what inspires me " />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my prespectives.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools used to create digital experience</p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon Component={item.iconType} />
                <span>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond The Code</h3>
            <p>Explore my interests and hobbies beyond the code</p>
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="smile memoji" />
        </Card>
      </div>

    </div>
  )
};

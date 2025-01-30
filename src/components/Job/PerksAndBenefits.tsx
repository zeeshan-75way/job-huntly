import type React from "react"
import { FaStethoscope, FaWater, FaVideo, FaMountain, FaCoffee, FaTrain, FaHeart } from "react-icons/fa"

interface BenefitProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Benefit = ({ icon, title, description }: BenefitProps) => (
  <div className="flex flex-col items-start">
    <div className="w-12 h-12 rounded-lg  flex items-center justify-center mb-4">
      <div className="text-blue-600 text-2xl">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2 clash-display ">{title}</h3>
    <p className="text-gray-600 leading-relaxed epilogue-400 text-base">{description}</p>
  </div>
)

export default function PerksAndBenefits() {
  const benefits = [
    {
      icon: <FaStethoscope fontSize={48} />,
      title: "Full Healthcare",
      description: "We believe in thriving communities and that starts with our team being happy and healthy.",
    },
    {
      icon: <FaWater fontSize={48} />,
      title: "Unlimited Vacation",
      description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
    },
    {
      icon: <FaVideo fontSize={48} />,
      title: "Skill Development",
      description:
        "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
    },
    {
      icon: <FaMountain  fontSize={48} />,
      title: "Team Summits",
      description:
        "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
    },
    {
      icon: <FaCoffee fontSize={48} />,
      title: "Remote Working",
      description: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
    },
    {
      icon: <FaTrain fontSize={48}/>,
      title: "Commuter Benefits",
      description: "We're grateful for all the time and energy each team member puts into getting to work every day.",
    },
    {
      icon: <FaHeart fontSize={48} />,
      title: "We give back",
      description:
        "We anonymously match any donation our employees make (up to $/€ 500) so they can support the organizations they care about most-times two.",
    },
  ]

  return (
    <div className="md:p-12 p-6 w-11/12 mx-auto flex flex-col gap-y-8">
      <div className="">
        <h2 className="text-3xl clash-display font-semibold text-gray-900 mb-2">Perks & Benefits</h2>
        <p className="text-gray-600 epilogue-400 text-base">This job comes with several perks and benefits</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {benefits.map((benefit, index) => (
          <Benefit key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
        ))}
      </div>
    </div>
  )
}


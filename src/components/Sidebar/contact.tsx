import { INetwork } from "@/interfaces/INetwork";
import { 
  EnvelopeSimple, 
  GithubLogo, 
  Globe, 
  IconProps, 
  LinkedinLogo, 
  MapPin
} from "phosphor-react";

const contactIcons = [
  {
    name: "GitHub",
    icon: <GithubLogo size={24} className="text-primary" />,
  },
  {
    name: "E-mail",
    icon: <EnvelopeSimple size={24} className="text-primary" />,
  },
  {
    name: "Locale",
    icon: <MapPin size={24} className="text-primary" />,
  },
  {
    name: "LinkedIn",
    icon: <LinkedinLogo size={24} className="text-primary" />,
  },
  {
    name: "Website",
    icon: <Globe size={24} className="text-primary" />,
  }
];

interface ContactProps {
  network: INetwork;
}

export function Contact({ network }: ContactProps) {
  const contactIcon = contactIcons.find(({ name }) => name === network.networkName)

  return (
    <a
      href={network.isLink ? network.url : ""}
      key={network.id}
      target="_blank"
      rel="noreferrer"
      className={`
        flex gap-4 items-center 
        text-primary text-sm 
        ${network.isLink && "underline underline-offset-4"}
      `}
    >
      {contactIcon?.icon}
      <span>{network.userName}</span>
    </a>
  );
}
import {
  EnvelopeSimple,
  GithubLogo,
  Globe,
  LinkedinLogo,
  MapPin
} from "phosphor-react";

import { INetwork } from "@/interfaces/INetwork";

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

  if (!network.isLink) {
    return (
      <li
        key={network.id}
        className="flex gap-4 items-center text-primary text-sm"
      >
        {contactIcon?.icon}
        <span>{network.userName}</span>
      </li>
    );
  }

  return (
    <a
      href={network.url}
      key={network.id}
      target="_blank"
      rel="noreferrer"
      className={`
        flex gap-4 items-center 
        text-primary text-sm 
        underline underline-offset-4
        cursor-pointer
      `}
    >
      {contactIcon?.icon}
      <span>{network.userName}</span>
    </a>
  );
}



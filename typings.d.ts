export interface skillsIconModal {
  title: string;
  percent: number;
  color: string;
  icon: any;
}

export interface navbarLinkModal {
  title: string;
  href: string;
}

export interface projectModal {
  id: number;
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl: string;
  dependicies: string[];
  image: string;
  framework: string;
}

export interface sideBarIconModal {
  icon: any;
  link: string;
  color: string;
  text: string;
}

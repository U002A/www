export interface ProjectItem {
  key: number,
  name: string,
  desc: string,
  link: string,
  img: string
}

export const ProjectList: ProjectItem[] = [
  {
    key: 0,
    img: "https://raw.githubusercontent.com/U002A/art/master/soli/promo.png",
    name: "Soli for Reddit",
    desc: "A minimal subreddit browser.",
    link: "https://soli.asterisk.ws/"
  }
]
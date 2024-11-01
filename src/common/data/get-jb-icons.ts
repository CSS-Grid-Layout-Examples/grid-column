/* interface */
interface IBrand {
  src: string;
  alt: string;
  title: string;
}

/* module */
function getJBIcons(): IBrand[] {
  return [
    {src: "/jet-brains-icons/pycharmedu-icon.svg?updatedAt=1730004278687", alt: "Pycharmedu", title: "Pycharmedu"},
    {src: "/jet-brains-icons/resharperc-icon.svg?updatedAt=1730004278606", alt: "ResharperC", title: "ResharperC"},
    {src: "/jet-brains-icons/teamcity-icon.svg?updatedAt=1730004278616", alt: "Team City", title: "Team City"},
    {src: "/jet-brains-icons/dottrace-icon.svg?updatedAt=1730004278603", alt: "Dot Trace", title: "Dot Trace"},
    {src: "/jet-brains-icons/webstorm-icon.svg?updatedAt=1730004278604", alt: "WebStorm", title: "WebStorm"},
    {src: "/jet-brains-icons/mps-icon.svg?updatedAt=1730004278556", alt: "MPS", title: "MPS"},
    {src: "/jet-brains-icons/hub-icon.svg?updatedAt=1730004278542", alt: "Hub", title: "Hub"},
    {src: "/jet-brains-icons/dotcover.svg?updatedAt=1730004278505", alt: "Dot Cover", title: "Dot Cover"},
    {src: "/jet-brains-icons/icon-dotmemory.svg?updatedAt=1730004278461", alt: "Dot Memory", title: "Dot Memory"},
    {src: "/jet-brains-icons/upsource-icon.svg?updatedAt=1730004278460", alt: "UpSource", title: "UpSource"},
  ];
}

/* exports */
export default getJBIcons;

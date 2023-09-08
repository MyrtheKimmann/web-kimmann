import schotland from "../images/schotland.jpg";
import l from "../images/l.jpg";
import helm from "../images/helm.jpg";

export const projects = [
  {
    id: 1,
    title: "Hydraulische kraan",
    country: "Schotland",
    date: "aug, 2023",
    text: "Dit is een kraan die gebruikt wordt om goederen van het schip op het platform te hijsen en andersom. Doordat er altijd mensen in de buurt lopen, moet elke handeling soepel en betrouwbaar verlopen. De kraan was niet veilig en buiten werking gezet. Hans heeft ervoor gezorgd dat de kraan na aanpassing veilig gebruikt kan worden.",
    image: schotland,
    detailsImages: [
      {
        id: 1,
        image: l,
      },
      {
        id: 2,
        image: helm,
      },
    ],
  },
];

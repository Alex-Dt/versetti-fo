import { DefaultCard } from "./Compose/DefaultCard";
import { FilledCard } from "./Compose/FilledCard";
import { StrokedCard } from "./Compose/StrokedCard";

export const Card = ({ type = 1, data = {} }) => {
  switch (type) {
    case 1:
      return <DefaultCard {...data} />;
    case 2:
      return <FilledCard {...data} />;
    case 3:
      return <StrokedCard {...data} />;

    default:
      return <DefaultCard {...data} />;
  }
};

import { Cover } from "components/Cover";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/paragraph": {
        console.log(block);
        
        return <Cover key={block.id} backgroundURL={block.attributes}>Core paragraph</Cover>;
      }
      default:
        return null;
    }
  });
};

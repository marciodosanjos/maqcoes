import { Cover } from "components/Cover";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        console.log(block);

        return (
          <Cover key={block.id} background={block.attributes.url}>
            Core paragraph
          </Cover>
        );
      }
      case "core/heading":
        console.log(block);
      default:
        return null;
    }
  });
};

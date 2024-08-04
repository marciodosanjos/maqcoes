export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/paragraph": {
        return <div key={block.id}>Core paragraph</div>;
      }
      default:
        return null;
    }
  });
};

import { Button } from 'components/Button/Button'
import { Cover } from 'components/Cover'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'
import { theme } from 'theme'

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      case 'core/heading': {
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            level={block.attributes.level}
            content={block.attributes.content}
          />
        )
      }
      case 'core/buttons': {
        //console.log(block)
      }
      case 'core/paragraph': {
        console.log(block)

        return (
          <Paragraph
            key={block.id}
            content={block.attributes?.content}
            textAlign={block.attributes?.textAlign}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
          />
        )
      }

      default:
        return null
    }
  })
}

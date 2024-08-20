import { gql } from '@apollo/client'
import client from 'client'
import { BlockRenderer } from 'components/BlockRenderer'
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks'
import { mapMainMenuItems } from 'utils/mapMainMenuItems'

export default function Home(props) {
  console.log('props: ', props)

  return (
    <div className='font-heading'>
      <BlockRenderer blocks={props.blocks} />;
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query homePage {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItems {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
  })
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      mainMenuItems: data.acfOptionsMainMenu.mainMenu.menuItems,
      menu: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
    },
  }
}

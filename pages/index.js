import { gql } from '@apollo/client'
import client from 'client'
import { BlockRenderer } from 'components/BlockRenderer'
import { MainMenu } from 'components/MainMenu/MainMenu'
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks'
import { mapMainMenuItems } from 'utils/mapMainMenuItems'

export default function Home(props) {
  console.log('MAIN: ', props)

  return (
    <div className='font-heading'>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
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
            callToActionButton {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
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
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      callToActionLabel:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
    },
  }
}

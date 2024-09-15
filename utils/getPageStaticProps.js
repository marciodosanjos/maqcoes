import { gql } from '@apollo/client'
import client from 'client'
import { cleanAndTransformBlocks } from './cleanAndTransformBlocks'
import { mapMainMenuItems } from './mapMainMenuItems'

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `${context.params.slug.join('/')}/` : '/'

  const { data } = await client.query({
    query: gql`
      query pageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
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
    variables: {
      uri,
    },
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

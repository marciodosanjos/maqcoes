export const relativeToAbsoluteURls = (htmlString = '') => {
  return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join('')
}

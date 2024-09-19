import { ButtonLink } from 'components/ButtonLink'

export const CallToActionButton = ({
  alignment = 'left',
  buttonLabel,
  destination,
}) => {
  const alignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }
  return (
    <div className={alignMap[alignment]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  )
}

const FaIcon: React.FC<{
  name: string,
}> = ({
  name,
}) => {
  return <i className={`fa fa-${name}`} aria-hidden="true"></i>
}

export default FaIcon

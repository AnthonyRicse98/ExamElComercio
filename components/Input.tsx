type Props = {
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

const Input: React.FC<Props> = (props) => {
  return <input {...props} />
}

export default Input

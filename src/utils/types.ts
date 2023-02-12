export type TextareaProps = {
  className: string,
  id?: string,
  placeholder?: string,
  name?: string,
  value?: string,
  readOnly?: boolean,
  onChange?: any
}

export type ButtonProps = {
  className: string,
  id?: string,
  value: string,
  onClick?: any,
  onChange?: any,
  disable?: boolean
}

export type InputProps = {
  className: string,
  id?: string,
  placeholder?: string,
  name?: string,
  type: string
}

export type Size = {
  width: string,
  height: string
}
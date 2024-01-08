export interface BindingOptions {
  value: string
  oldValue?: string
  arg?: string
  modifiers?: { [modifier: string]: boolean }
  instance: any
}

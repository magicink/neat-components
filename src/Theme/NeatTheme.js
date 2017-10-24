// @flow
export type Theme = {
  color: ?string,
  columns: number,
  direction: 'ltr' | 'rtl',
  gutter: string,
  media: ?string | ?number
}
export const NeatTheme: Theme = {
  color: null,
  columns: 12,
  direction: 'ltr',
  gutter: '20px',
  media: null
}
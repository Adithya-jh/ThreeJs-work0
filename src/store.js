import { proxy } from 'valtio'

const state = proxy({

  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],

  color: '#EFBD4E',
  decal: 'three2'
})

export { state }

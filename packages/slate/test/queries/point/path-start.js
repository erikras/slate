/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <value>
    <block>one</block>
  </value>
)

export const run = editor => {
  return Editor.point(editor, [0], { edge: 'start' })
}

export const output = { path: [0, 0], offset: 0 }
import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/theme/material.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
import 'codemirror/addon/edit/closebrackets'
import './code.styles.css'

export const Code = (props) => {
  const {
    code = {},
    setCode,
    mode,
    theme,
    lineNumbers = true,
    readOnly = false,
    isString = false,
  } = props
  const options = {
    mode: mode ? mode : 'json',
    theme: theme ? theme : 'material',
    lineNumbers: lineNumbers,
    readOnly: readOnly,
    fontSize: '17px',
  }

  return (
    <div className="code-holder">
      {/* <CodeMirror value={JSON.stringify(code, null, 2)} options={options} /> */}
      <CodeMirror
        value={isString ? JSON.stringify(code, null, 2) : code}
        {...(readOnly || { onChange: (_, metadata, value) => setCode(value) })}
        name="code"
        {...props}
        options={options}
      />
    </div>
  )
}

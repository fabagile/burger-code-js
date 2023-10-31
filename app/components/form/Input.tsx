import React from 'react'

const Input = ({
  label,
  value,
  entry='',
  // setEntry,
  inputType = 'text'
}: {
  label: string
  value: string
  entry?: string
  // setEntry: any
  inputType?: string
}) => {
  return (
    <>
      <div className='form-group'>
        <label htmlFor={value}>{label}:</label>
        <input
          type={inputType ? inputType : 'text'}
          className='form-control'
          id={value}
          name={value}
          placeholder={label}
          // onChange={setEntry}
          defaultValue={entry}
        />
        <span className='help-inline'>{/* <?php echo $nameError;?> */}</span>
      </div>
    </>
  )
}

export default Input

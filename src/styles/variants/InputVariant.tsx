const base = {
    border: '1px solid #E9E9E9',
    display: 'block',
    padding: '8px 16px',
    width: '90%',
    height: '40px',
    color: '#333333',
    fontSize: '16px',
    lineHeight: '24px',
    outline: '0',
    content: "",
    borderRadius: 0
}

export const InputVariant = {
  default: {
    borderBottom: '1px solid #fff',
    ...base
  },
  primary: {
    borderBottom: '1px solid #4CACE0',
    ...base
  },
  error: {
    borderBottom: '1px solid #CF4646',
    ...base
  },
};

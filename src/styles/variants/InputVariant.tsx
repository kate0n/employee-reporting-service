const base = {
    display: 'block',
    padding: '8px 16px',
    width: '100%',
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
        border: '1px solid #E9E9E9',
        ...base
    },
    primary: {
        border: '1px solid #8F83D9',
        ...base
    },
    error: {
        border: '1px solid #EB5757',
        ...base
    },
};

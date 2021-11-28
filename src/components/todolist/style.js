export const styles = {
    list: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        color: 'text.secondary',

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    addTodo: {
        textDecoration: 'none',
    },
    navLink: {
        '&:disabled': {
            pointerEvents: 'none'
        }
    },
    todoCompleted: {
        backgroundColor: 'background.paperDisabled',
    },
    carSubdHeader: {
        "& .MuiCardHeader-subheader": {
            fontSize: '0.8rem'
        }
    }
}
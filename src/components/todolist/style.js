export const styles = {
    list: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        color: 'text.secondary',

    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    addTodo: {
        textDecoration: 'none',
    },
    navLink:{
        '&:disabled':{
            pointerEvents: 'none'
        }
    }
}
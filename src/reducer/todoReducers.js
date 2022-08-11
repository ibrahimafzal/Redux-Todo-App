const initialData = {
    list: []
}

// const [list, setList] = useState([]);

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            console.log('hello ', id, data)
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            case "DELETE_TODO":
                const newList = state.list.filter((item) => item.id != action.id)
                return {
                    ...state,
                    list: newList
                }
            default: return state;
    }
}
export default todoReducers;
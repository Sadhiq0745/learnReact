import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Hello Redux!!..."}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,

    reducers:{                          //properties and the functions are writtenn in the reducers..
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{     //State and the Action has access evrytime
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },   
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        }
    }
})

export const{addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer
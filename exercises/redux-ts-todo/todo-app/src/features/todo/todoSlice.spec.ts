import { Todo } from "./Todo"
import todoSlice from "./todoSlice";
describe('todo reducer', () => {
    // const TestedTodoState:Todo={
    //     id:Math.random()*100,
    //     isCompleted:false,
    //     desc: 'test todo'
    // };
    const initTodoState:Todo[] = todoSlice(undefined, { type: 'unknown' });
    // console.log(initTodoState);
    
    it('should intialize state',() =>{
      expect(initTodoState).toEqual<Todo[]>([]);
    })});
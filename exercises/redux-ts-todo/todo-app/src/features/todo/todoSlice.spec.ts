import { Todo } from "./todo"
import todoSlice from "./todoSlice";
describe('todo reducer', () => {
    const initialTestTodoState:Todo={
        id:Math.random()*100,
        isCompleted:false,
        desc: 'test todo'
    };
    it('should intialize state',() => {
        expect(todoSlice(undefined, { type: 'unknown' })).toEqual({
          value: 0,
          status: 'idle',
        });
      })
    
})
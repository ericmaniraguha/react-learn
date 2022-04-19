import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My first react App.</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Project with React' />
      <Todo text='Rebuild project with React' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

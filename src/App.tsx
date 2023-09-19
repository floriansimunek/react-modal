import Modal from '@components/Modal';
import '@components/index.css';

const App = () => {
  return (
    <div className="App">
      <Modal title="Ceci est mon titre">
        <h1>Titre test</h1>
        <p>Ceci est un paragraphe de test</p>
      </Modal>
    </div>
  );
};

export default App;

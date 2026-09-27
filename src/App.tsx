const STANDALONE_APP = '/VertLab_1790481309947.html';

function App() {
  return (
    <main className="vertlab-shell">
      <iframe
        className="vertlab-frame"
        src={STANDALONE_APP}
        title="VertLab vertical jump training"
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}

export default App;
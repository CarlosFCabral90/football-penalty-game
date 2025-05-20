import UnityGame from './components/UnityGame'

function App() {
  return (
    <div
      style={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        width: '100%'
      }}
    >
      <h1>Football Penalty Game</h1>
      <div style={{ width: '80%' }}>
        <UnityGame />
      </div>
    </div>
  )
}

export default App

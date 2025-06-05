import UnityGame from './components/UnityGame'

function App() {
  return (
    <div
      style={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        height: '100vh'
      }}
    >
      <div style={{ width: '100%' }}>
        <UnityGame />
      </div>
    </div>
  )
}

export default App

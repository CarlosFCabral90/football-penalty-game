export default function UnityGame() {
    return (
        <div 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                width: '100%',
            }}
        >
            <iframe
                title="Unity WebGL Game"
                src="/unity/index.html"
                allowFullScreen
                frameBorder="0"
                height="100%"
                width="100%"
            />
        </div>
    );
}
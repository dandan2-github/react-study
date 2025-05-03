import './App.css';
import ProfileCard from './components/ProfileCard';
import rilakkumaImg from './assets/rirak.jpg'; 

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      <ProfileCard
        name="다니"
        image={rilakkumaImg}
        bio="안녕하세요! 저는 강릉원주대 다니고 있는 25살 김다인이라고 합니다."
      />
    </div>
  );
}

export default App;

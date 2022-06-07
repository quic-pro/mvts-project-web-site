import robotImg from './img/CHAR-21.png';
import mvtsLogo from './img/Vector.png';
// import './App.css';

function App() {
  return (
    <div class="bg-mainBlack h-screen static">
      <head>

      </head>
      <div class="bg-mainBlack ph:h-3/4 h-1/2 static">
        <div class="grid grid-cols-2 ph:grid-cols-1 ph:static relative inset-y-1/4 items-center">
          <img src={robotImg} class="resize ph:pt-8 px-6 object-scale-down ph:order-1 order-2" alt="robot"/>
          <div class="text-5xl font-Comfort text-bigText text-center ph:order-2 order-1">
            Coming soon
          </div>
        </div>
        <div class="grid grid-cols-2 content-end items-center p-2 bg-gradient-to-b from-gradientBlack to-mainBlack ph:h-1/4 h-1/2 static">
          <img src={mvtsLogo} class="resize" alt="logo"/>
          <div class="font-Montserr text-botText/75 text-xxs">
            «MetaVerse Telecom Service» © 2022. All rights reserved.
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

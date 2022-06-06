import robotImg from './img/CHAR-21.png';
import mvtsLogo from './img/Vector.png';
// import './App.css';

function App() {
  return (
    <div class="bg-mainBlack h-screen static">
      <head>

      </head>
      <div class="bg-mainBlack h-screen static">
        <div class="static w-full grid grid-cols-2 ph:grid-cols-1 ph:static relative inset-y-1/4 items-center">
          <img src={robotImg} class="resize ph:pt-8 px-6 object-scale-down ph:order-1 order-2" alt="robot"/>
          <div class="text-5xl font-Comfort text-bigText text-center ph:order-2 order-1">
            Coming soon
          </div>
        </div>
        <div class="bg-gradient-to-b from-gradientBlack to-mainBlack ph:h-1/4 h-1/2 static bottom-0">
          <div class="pb-6 px-3 absolute bottom-0 w-full">
            <img src={mvtsLogo} class="float-left resize px-1 h-3" alt="logo"/>
            <div class="font-Montserr text-botText/75 text-xxs absolute right-0 px-2">
              «MetaVerse Telecom Service» © 2022. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

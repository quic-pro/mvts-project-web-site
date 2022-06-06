import robotImg from './img/CHAR-21.png';
import mvtsLogo from './img/Vector.png';
// import './App.css';

function App() {
  return (
    <div class="bg-mainBlack h-screen">
      <head>

      </head>
      <div class="bg-mainBlack h-screen">
        <div class="static w-full grid grid-cols-2 ph:grid-cols-1 relative items-center">
        {/* <center> */}
          <img src={robotImg} class="resize static pt-8 px-6 object-scale-down ph:order-1 order-2" alt="robot"/>
        {/* </center> */}
          <div class="text-5xl font-Comfort text-bigText text-center ph:order-2 order-1">
            Coming soon
          </div>
        </div>
        <div class="bg-gradient-to-b from-gradientBlack to-mainBlack ph:h-1/4 h-1/2 relative">
          <div class="pb-6 px-3 absolute bottom-0 w-full">
            <img src={mvtsLogo} class="float-left resize px-1 h-2" alt="logo"/>
            <p class="font-/Montserr text-botText/75 text-xxs absolute right-0 px-2">
              «MetaVerse Telecom Service» © 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

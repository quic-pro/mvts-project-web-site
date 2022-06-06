import robotImg from './img/CHAR-21.png';
import mvtsLogo from './img/Vector.png';
// import './App.css';

function App() {
  return (
    <div class="bg-mainBlack h-screen">
      <head>

      </head>
      <div class="bg-mainBlack">
        <div class="relative">
        <center>
          <img src={robotImg} class="resize pt-8 px-6" alt="robot"/>
        </center>
          <p class="text-5xl font-Comfort text-bigText">
            <center>
            Coming soon
            </center>
          </p>
        </div>
        <div class="bg-gradient-to-b from-gradientBlack to-mainBlack h-40 relative">
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

import robotImg from './img/CHAR-2 1.png';
import mvtsLogo from './img/Vector.png';
// import './App.css';

function App() {
  return (
    <div class="bg-mainBlack">
      <head>

      </head>
      <body class="bg-mainBlack">
        <div class="relative">
          <img src={robotImg} class="resize pt-8 px-6" alt="robot"/>
          <p class="text-5xl font-sans text-bigText">
            <center>
            Coming soon
            </center>
          </p>
        </div>
        <div class="bg-gradient-to-b from-gradientBlack to-mainBlack h-40 relative">
          <div class="pb-6 px-3 absolute bottom-0 w-full">
            <img src={mvtsLogo} class="float-left resize px-1 h-2" alt="logo"/>
            <p class="font-sans text-botText text-xxs absolute right-0 px-2">
              «MetaVerse Telecom Service» © 2022. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </div>

    // <div className="App">
    //     <header className="App-header"> </header>
    //     <body className="App-body">
    //         <div className="Div-top">
    //             <img src={robotImg} className="Robot-Img" alt="robot" />
    //             <p className="Main-text">
    //                 Coming soon
    //             {/* <div id="first_id_for_stud"></div> */}
    //             </p>
    //         </div>
    //         <div className="Div-bot">
    //             <img src={mvtsLogo} className="Mvts-Logo" alt="logo"/>
    //             <p className="Text-bot">
    //                 «MetaVerse Telecom Service» © 2022. All rights reserved.
    //             </p>

    //         </div>
            
    //     </body>
       
    //   {/* </header> */}
    // </div>
  );
}

export default App;

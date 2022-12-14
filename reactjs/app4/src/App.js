
import './App.css';
import Livclasscomp from './Classcomponents/class10component';
import Students from './Classcomponents/class11component';

import Jiminclasscomp from './Classcomponents/class1component';
import Genclasscomp from './Classcomponents/class2component';
import Insclasscomp from './Classcomponents/class3component';
import Actclasscomp from './Classcomponents/class4component';
import Labclasscomp from './Classcomponents/class5component';
import Minclasscomp from './Classcomponents/class6component';
import Namclasscomp from './Classcomponents/class7component';
import Staclasscomp from './Classcomponents/class8component';
import Occclasscomp from './Classcomponents/class9component';
import Trackfunctionalcomp from './functioncomponents/function10component';


import Jimincomp from './functioncomponents/function1component';
import Prkfunctionalcomp from './functioncomponents/function2component';
import Jimfunctionalcomp from './functioncomponents/function3component';
import Andfunctionalcomp from './functioncomponents/function4component';
import Threefunctionalcomp from './functioncomponents/function5component';
import Liefunctionalcomp from './functioncomponents/function6component';
import Serefunctionalcomp from './functioncomponents/function7component';
import Filtfunctionalcomp from './functioncomponents/function8component';
import Digfunctionalcomp from './functioncomponents/function9component';
import VideoFile2 from "./Video3.mp4";
function App() {
  return (
    <div className="App">
     <h1 class="bts">Hello Welcome To BANGTAN SONYEODON world</h1>
     <Jimincomp/>
     <Prkfunctionalcomp/>
     <Jimfunctionalcomp/>
     <Andfunctionalcomp/>
     <Threefunctionalcomp/>
     <Liefunctionalcomp/>
     <Serefunctionalcomp/>
     <Filtfunctionalcomp/>
     <Digfunctionalcomp/>
     <Trackfunctionalcomp/>
     <Jiminclasscomp/>
     <video width="100%" height="250" controls>
      <source src={VideoFile2} type="video/mp4" />
    </video>
    <Genclasscomp/>
    <Insclasscomp/>
    <Actclasscomp/>
    <Labclasscomp/>
    <Minclasscomp/>
    <Namclasscomp/>
    <Staclasscomp/>
    <Occclasscomp/>
    <Livclasscomp/>
    <Students/>
    </div>
  );
}

export default App;

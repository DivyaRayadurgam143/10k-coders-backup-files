import "./style.css"
import './App.css';
import Livclasscomp from './Classcomponents/class10component';
import Rmclasscomp from './Classcomponents/class1component';
import Genclasscomp from './Classcomponents/class2component';
import Insclasscomp from './Classcomponents/class3component';
import Actclasscomp from './Classcomponents/class4component';
import Labclasscomp from './Classcomponents/class5component';
import Ofclasscomp from './Classcomponents/class6component';
import Namclasscomp from './Classcomponents/class7component';
import Staclasscomp from './Classcomponents/class8component';
import Occclasscomp from './Classcomponents/class9component';
import Hwafunctionalcomp from './functioncomponents/function10component';
import Rmcomp from './functioncomponents/function1component';
import Kimfunctionalcomp from './functioncomponents/function2component';
import Vfunctionalcomp from './functioncomponents/function3component';
import Andfunctionalcomp from './functioncomponents/function4component';
import Threefunctionalcomp from './functioncomponents/function5component';
import Underfunctionalcomp from './functioncomponents/function6component';
import Singfunctionalcomp from './functioncomponents/function7component';
import Innerfunctionalcomp from './functioncomponents/function8component';
import Hisfunctionalcomp from './functioncomponents/function9component';

import VideoFile1 from "./Video2.mp4";
import Students from "./Classcomponents/class11component";

function App() {
  return (
    <div className="App">
       <h1 class="bts">Hello Welcome To BANGTAN SONYEODON world</h1>
       <Rmcomp/>
       <Kimfunctionalcomp/>
       <Vfunctionalcomp/>
       <Andfunctionalcomp/>
       <Threefunctionalcomp/>
       <Underfunctionalcomp/>
       <Singfunctionalcomp/>
       <Innerfunctionalcomp/>
       <Hisfunctionalcomp/>
       <Hwafunctionalcomp/>
       <Rmclasscomp/>
       <video width="100%" height="250" controls>
        <source src={VideoFile1} type="video/mp4" />
      </video>
      <Genclasscomp/>
      <Insclasscomp/>
      <Actclasscomp/>
      <Labclasscomp/>
      <Ofclasscomp/>
      <Namclasscomp/>
      <Staclasscomp/>
      <Occclasscomp/>
      <Livclasscomp/>
      <Students/>
    </div>
  );
}

export default App;


import './App.css';
import Gkoclasscomp from './Classcomponents/class10component';
import Junkookclasscomp from './Classcomponents/class1component';
import Educlasscomp from './Classcomponents/class2component';
import Patclasscomp from './Classcomponents/class3component';
import Kpoclasscomp from './Classcomponents/class4component';
import Mentclasscomp from './Classcomponents/class5component';
import Preclasscomp from './Classcomponents/class6component';
import Belsclasscomp from './Classcomponents/class7component';
import Berclasscomp from './Classcomponents/class8component';
import Gulclasscomp from './Classcomponents/class9component';
import Leffunctionalcomp from './functioncomponents/function10component';


import Jungkookcomp from './functioncomponents/function1component';
import Jeonfunctionalcomp from './functioncomponents/function2component';
import Jkfunctionalcomp from './functioncomponents/function3component';
import Vocfunctionalcomp from './functioncomponents/function4component';
import Solfunctionalcomp from './functioncomponents/function5component';
import Begfunctionalcomp from './functioncomponents/function6component';
import Eupfunctionalcomp from './functioncomponents/function7component';
import Timfunctionalcomp from './functioncomponents/function8component';
import Sangfunctionalcomp from './functioncomponents/function9component';
import VideoFile3 from "./Video4.mp4";
function App() {
  return (
    <div className="App">
     <h1 class="bts">Hello Welcome To BANGTAN SONYEODON world</h1>
     <Jungkookcomp/>
     <Jeonfunctionalcomp/>
     <Jkfunctionalcomp/>
     <Vocfunctionalcomp/>
     <Solfunctionalcomp/>
     <Begfunctionalcomp/>
     <Eupfunctionalcomp/>
     <Timfunctionalcomp/>
     <Sangfunctionalcomp/>
     <Leffunctionalcomp/>
     <Junkookclasscomp/>
     <video width="100%" height="250" controls>
        <source src={VideoFile3} type="video/mp4" />
      </video>
      <Educlasscomp/>
      <Patclasscomp/>
      <Kpoclasscomp/>
      <Mentclasscomp/>
      <Preclasscomp/>
      <Belsclasscomp/>
      <Berclasscomp/>
      <Gulclasscomp/>
      <Gkoclasscomp/>
    </div>
  );
}

export default App;

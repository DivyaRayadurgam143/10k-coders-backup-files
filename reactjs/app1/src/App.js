import "./style.css"
import Btsclasscomp from "./Classcomponents/class9component";
import Btsfunctionalcomp from "./functioncomponents/function1component";
import Multiplefunction from "./multiplefunctioncomponent"
import { ParentComponent,ChildComponent } from "./multiplefunctioncomponent";
import { MainClassComponent } from "./multipleclasscomponent";
import Bangfunctionalcomp from "./functioncomponents/function2component";
import Formedfunctionalcomp from "./functioncomponents/function3component";
import Memfunctionalcomp from "./functioncomponents/function4component";
import Musicfunctionalcomp from "./functioncomponents/function5component";
import Lyricsfunctionalcomp from "./functioncomponents/function6component";
import Workfunctionalcomp from "./functioncomponents/function7component";
import Firstfunctionalcomp from "./functioncomponents/function8component";
import Groupfunctionalcomp from "./functioncomponents/function9component";
import Koreanfunctionalcomp from "./functioncomponents/function10component";
import Skoolclasscomp from "./Classcomponents/class1component";
import Mostclasscomp from "./Classcomponents/class2component";
import Youngclasscomp from "./Classcomponents/class3component";
import Liveclasscomp from "./Classcomponents/class4component";
import Releaseclasscomp from "./Classcomponents/class5component";
import Rmclasscomp from "./Classcomponents/class6component";
import Novclasscomp from "./Classcomponents/class7component";
import Wonclasscomp from "./Classcomponents/class8component";
import Btscomp from "./Classcomponents/class11component";
import Student from "./Classcomponents/class12component";

function App() {
  return (
    <div className="App">
      <h1 class="bts">Hello Welcome To BANGTAN SONYEODON world</h1>
      <Btsfunctionalcomp />
      <Bangfunctionalcomp/>
      <Formedfunctionalcomp/>
      <Memfunctionalcomp/>
      <Musicfunctionalcomp/>
      <Lyricsfunctionalcomp/>
      <Workfunctionalcomp/>
      <Firstfunctionalcomp/>
      <Groupfunctionalcomp/>
      <Koreanfunctionalcomp/>
      <Btsclasscomp />
      <Skoolclasscomp/>
      <Mostclasscomp/>
      <Youngclasscomp/>
      <Liveclasscomp/>
      <Releaseclasscomp/>
      <Rmclasscomp/>
      <Novclasscomp/>
      <Wonclasscomp/>
      <Multiplefunction/>
      <ParentComponent/>
      <ChildComponent/>
      <MainClassComponent/>
      <Btscomp/>
      <Student/>
   
    </div>
  );
}

export default App;

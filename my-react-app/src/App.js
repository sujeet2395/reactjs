import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import StateDemo from './components/StateDemo';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './css/appStyles.css'
import styles from './css/appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <RefsDemo/>
      {/* <ParentComp/> */}
      {/* <Table/>
      <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1>
      <h2 className={styles.success}>Success</h2>
      <Inline/> */}
      {/* <Stylesheet/> */}
      {/* <NameList/> */}
       {/* <Welcome name="Bruce" heroName="Batsman"/> */}
      {/*<Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Worder woman"/> */}
      {/* <Hello name="Bruce" heroName="Batsman"/> */}
      {/*<Hello name="Clark" heroName="Superman"/>
      <Hello name="Diana" heroName="Worder woman"/> */}
      {/* <StateDemo/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
    </div>
  );
}

export default App;

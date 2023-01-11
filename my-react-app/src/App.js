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
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoveredCounter from './components/HoveredCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext'

function App() {
  return (
    <div className="App">
      <UserProvider value={'Sujit'}/>
        <ComponentC />
      <UserProvider />
      {/* <CounterTwo>
        {(count, incrementCount) =>
          <ClickCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo>
      <CounterTwo render={(count, incrementCount) =>
        <HoverCounterTwo count={count} incrementCount={incrementCount} />} /> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User name={(isLoggedIn)=>isLoggedIn?"Sujit":"Guest"}/> */}
      {/* <ClickCounter name="Sujit"/>
      <HoveredCounter/> */}
      {/* <PortalDemo/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
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

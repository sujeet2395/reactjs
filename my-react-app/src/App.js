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
import UserContext, { ChannelContext } from './components/UserContext'
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import ClassCounter from './advanceconcepts/ClassCounter';
import HookCounter from './advanceconcepts/HookCounter';
import HookCounterTwo from './advanceconcepts/HookCounterTwo';
import ClassCounterTwo from './advanceconcepts/ClassCounterTwo';
import HookCounterThree from './advanceconcepts/HookCounterThree';
import HookCounterFour from './advanceconcepts/HookCounterFour';
import ClassCounterOne from './advanceconcepts/ClassCounterOne';
import HookCounterOne from './advanceconcepts/HookCounterOne';
import ClassMouse from './advanceconcepts/ClassMouse';
import HookMouse from './advanceconcepts/HookMouse';
import MouseContainer from './advanceconcepts/MouseContainer';
import IntervalClassCounter from './advanceconcepts/IntervalClassCounter';
import IntervalHookCounter from './advanceconcepts/IntervalHookCounter';
import DataFetching from './advanceconcepts/DataFetching';
import DataFetchingGetOne from './advanceconcepts/DataFetchingGetOne';
import DataFetchingByButton from './advanceconcepts/DataFetchingByButton';
import {ChannelContextTwo, UserContextTwo } from './advanceconcepts/UserContextTwo';
import ComponentCTwo from './advanceconcepts/ComponentCTwo';

function App() {
  return (
    <div className="App">
      <UserContextTwo.Provider value={'Sujit'}/>
        <ChannelContextTwo.Provider value={'Codevolution'}>
          <ComponentCTwo />
        </ChannelContextTwo.Provider>
      <UserContextTwo.Provider />
      {/* <UserContext.Provider value='Sujit'/>
        <ChannelContext.Provider value='Codevolution'>
          <ComponentC />
        </ChannelContext.Provider>
      <UserContext.Provider /> */}
      {/* <DataFetchingByButton/> */}
      {/* <DataFetchingGetOne /> */}
      {/* <DataFetching/> */}
      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
      {/* <PostForm/> */}
      {/* <PostsList/> */}
      {/* <UserProvider value={'Sujit'}/>
        <ComponentC />
      <UserProvider /> */}
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

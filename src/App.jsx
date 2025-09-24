
import styles from "./components/List.module.css"
import { NetflixSeries } from "./components/NetflixSeries";
import { Todo } from "./components/projects/todo/Todo";
import { ToggleSwitch } from "./components/projects/toggleswitch";
export const App = () => {
return (
    <>
   {/* <div className="font-bold text-xl ">
    <div className={styles.list}> <h1>list of series</h1></div>
  <NetflixSeries/>
  </div> */}

 {/* <ToggleSwitch/>
 <ToggleSwitch/> */}
 <Todo/>

</>
);

}

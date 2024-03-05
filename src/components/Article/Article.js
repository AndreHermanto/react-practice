import Test from "./Test/Test"
import SharedComponent from "../../helpers/SharedComponent/SharedComponent";

export default function Article(props) {
    return (
      <>
        <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
        <Test info={props.info}/>
        <SharedComponent />
      </>
    );
  }

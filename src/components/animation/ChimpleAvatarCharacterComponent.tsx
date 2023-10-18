import { useState } from "react";
import { Fit, Layout, useRive, useStateMachineInput } from "rive-react";

export default function ChimpleAvatarCharacterComponent({ style }) {
  const State_Machine = "State Machine 1";
  // const inputName = "look_idle";

  const [riveCharHandsUp, setRiveCharHandsUp] = useState("Fail");

  const { rive, RiveComponent } = useRive({
    src: "/assets/animation/chimplecharacter.riv",
    stateMachines: State_Machine,
    layout: new Layout({ fit: Fit.Cover }),
    animations: riveCharHandsUp,
    autoplay: true,
  });

  const onclickInput = useStateMachineInput(
    rive,
    State_Machine,
    riveCharHandsUp
  );

  return (
    <RiveComponent
      style={style}
      onClick={(e) => {
        if (riveCharHandsUp === "Idle") {
          setRiveCharHandsUp("Success");
        } else if (riveCharHandsUp === "Success") {
          setRiveCharHandsUp("Fail");
        } else {
          setRiveCharHandsUp("Idle");
        }

        console.log("riveCharHandsUp", riveCharHandsUp);

        onclickInput && onclickInput?.fire();

        // const randomNumber = Math.floor(Math.random() * 7) + 0;
        // console.log("RiveComponent onclick", randomNumber);
        // switch (randomNumber) {
        //   case 0:
        //     setRiveCharHandsUp("hands_up");
        //     break;
        //   case 1:
        //     setRiveCharHandsUp("hands_down");
        //     break;
        //   case 2:
        //     setRiveCharHandsUp("fail");
        //     break;
        //   case 3:
        //     setRiveCharHandsUp("success");
        //     break;
        //   case 4:
        //     setRiveCharHandsUp("look_idle");
        //     break;
        //   case 5:
        //     setRiveCharHandsUp("Look_down_right");
        //     break;
        //   case 6:
        //     setRiveCharHandsUp("Look_down_left");
        //     break;
        //   case 7:
        //     setRiveCharHandsUp("idle");
        //     break;

        //   default:
        //     break;
        // }
      }}
    ></RiveComponent>
  );
}

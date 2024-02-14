import Child from "./Child";
import "./App.css";
function App() {
  let arr = [
    {
      planType: "Free",
      planValue: "$0",
      planbenefits: [
        { status: true, planDetails: "SingleUser" },
        { status: true, planDetails: "50GB storage" },
        { status: true, planDetails: "Unlimited Public projects" },
        { status: true, planDetails: "community access" },
        { status: false, planDetails: "unlimited private projects" },
        { status: false, planDetails: "dedicated phone support" },
        { status: false, planDetails: "free sub domain" },
        { status: false, planDetails: "monthly status report" },
      ],
    },

    {
      planType: "Plus",
      planValue: "$9",
      planbenefits: [
        { status: true, planDetails: "5 Users" },
        { status: true, planDetails: "50GB storage" },
        { status: true, planDetails: "Unlimited Public projects" },
        { status: true, planDetails: "community access" },
        { status: true, planDetails: "unlimited private projects" },
        { status: true, planDetails: "dedicated phone support" },
        { status: true, planDetails: "free sub domain" },
        { status: false, planDetails: "monthly status report" },
      ],
    },
    {
      planType: "Pro",
      planValue: "$49",
      planbenefits: [
        { status: true, planDetails: "5 Users" },
        { status: true, planDetails: "50GB storage" },
        { status: true, planDetails: "Unlimited Public projects" },
        { status: true, planDetails: "community access" },
        { status: true, planDetails: "unlimited private projects" },
        { status: true, planDetails: "dedicated phone support" },
        { status: true, planDetails: "free sub domain" },
        { status: true, planDetails: "monthly status report" },
      ],
    },
  ];

  return (
    <div className="mainDiv">
      {arr.map((x) => {
        return <Child key={x.planType} val={x}></Child>;
      })}
    </div>
  );
}

export default App;

import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 30000;
  return (
    <div>
    <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            carValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.carValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.carValue}
        label="Car Value"
        value={data.carValue}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.carValue - value).toFixed(0),
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.carValue}
        steps={100}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.carValue - value).toFixed(0),
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.carValue}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value.toFixed(0),
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={20}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;

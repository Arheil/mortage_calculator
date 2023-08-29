import React from "react";
import SliderComponent from "./Common/SliderComponent";
export default function SliderSelect({ data, setData }) {
  const bankLimit = 10000;
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => { 
          setData({ 
          ...data, 
          homeValue: value.toFixed(0),
          downPayment: (0.2 * value).toFixed(0),
          loanAmount: (0.8 * value).toFixed(0),
        })
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bankLimit}
        steps={100}
        value={data.homeValue}
        label="Home Value"
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({ 
            ...data, 
            downPayment: value.toFixed(0),
            loanAmount: (data.homevalue - value).toFixed(0),
          })
        }
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        amount={data.downPayment}
        value={data.downPayment}
        label="Down Payment"
        unit="$"
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({ 
            ...data, 
            loanAmount: value.toFixed(0),
            downAmount: (data.homevalue - value).toFixed(0),
          })
        }
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        value={data.loanAmount}
        label="Loan Payment"
        amount={data.loanAmount}
        unit="$"
      />
      <SliderComponent 
        onChange={(e, value) => {
          setData({ 
            ...data, 
            interestRate: value,
          })
        }}
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        value={data.interestRate}
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
      />
    </div>
  )
}

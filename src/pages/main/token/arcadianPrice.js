import {React,useState} from "react";
import TextFieldGroup from "../../../common/textFiledGroup";
import '../../../css/main/arcadianPrice.css'
import ReactApexChart from "react-apexcharts";


const ArcadianPrice = () => {
    const [calcTokenAmount , setCalcTokenAmount] = useState("");
    const [userErr,setUserErr] = useState("");
    const state = {         
      series: [{
        name: 'value',
        data: [0.00, 40, 28, 51, 42, 109]
      }],
      options: {
        colors: [ "#430077" , "#000000" /*Array of colors*/ ],
        chart: {
          toolbar: {
            show : false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          colors: ['#FFFFFF']
        },
        xaxis: {
          type: 'category',
          categories: ["0.000","0.000", "0.000","0.000","0.000","0.000","0.000"],
          tickAmount: 3, // interval you want
          labels: {
            show: true,
            style: {
              colors: 'white',
              fontSize: '20px'
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: 'white',
              fontSize: '12px'
            },
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: []
          }
        },
      },
    
    
    };

    return (
        <div>
            <h1 className="pricemonitor-title mt-5 font-orbitron pricemonitor-font-size-16">Price Chart</h1>
            <div id="dexscreener-embed">
              <iframe src="https://dexscreener.com/harmony/0x99950D86F2B13Fc08d86E64c6cB2cb63863A4ccd?embed=1&theme=dark">   
              </iframe>
            </div>
        </div>
    )
}

export default ArcadianPrice;
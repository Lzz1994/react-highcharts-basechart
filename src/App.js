import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import ABCHightChart from './components/ABCHightChart';

class App extends Component {
  render() {
    const data = {
      "title": "图2：公司盈利能力持续提升",
      "url": "http://abc-crawler.oss-cn-hangzhou.aliyuncs.com/charts/87c51c37326b38f0304ff20183e6d33fe0ad4806b52e6d4740311bd8e3a06b05/2_1.png",
      "id": "13010259_2_1",
      "data": {
        "AlgorithmCommitTime": {
          "text": "2018-05-07 11:00:00"
        },
        "credits": {
          "enabled": false
        },
        "title": {
          "text": "图2：公司盈利能力持续提升"
        },
        "xAxis": {
          "type": "category",
          "labels": {
            "textalign": "center"
          },
          "categories": ["FY2012", "FY2013", "FY2014", "FY2015", "FY2016", "FY2017"]
        },
        "yAxis": [{
          "labels": {
            "format": "{value}%",
            "style": []
          },
          "title": {
            "text": "",
            "style": []
          },
          "tickPositions": [0, 20, 40, 60, 80],
          "tickAmount": 5
        }],
        "legend": {
          "enabled": true
        },
        "series": [{
          "name": "毛利率(%)",
          "type": "spline",
          "color": "#2e75b6",
          "data": [
            ["FY2012", 46.4256],
            ["FY2013", 49.4852],
            ["FY2014", 50.3581],
            ["FY2015", 56.0366],
            ["FY2016", 59.2864],
            ["FY2017", 60.1506]
          ],
          "tooltip": {
            "pointFormat": "{series.name}: {point.y:,.2f}%"
          },
          "dataLabels": {
            "enabled": false,
            "format": "{point.y:,.f}%"
          },
          "marker": {
            "enabled": false
          }
        }, {
          "name": "净利率(%)",
          "type": "line",
          "color": "#b4c7e7",
          "data": [
            ["FY2012", 10.769],
            ["FY2013", 11.7029],
            ["FY2014", 13.5706],
            ["FY2015", 14.6082],
            ["FY2016", 14.4006],
            ["FY2017", 14.1931]
          ],
          "tooltip": {
            "pointFormat": "{series.name}: {point.y:,.2f}%"
          },
          "dataLabels": {
            "enabled": false,
            "format": "{point.y:,.f}%"
          },
          "marker": {
            "enabled": false
          }
        }]
      },
      "pageIndex": 2,
      "area": {
        "x": 309.07,
        "y": 420.88,
        "w": 222.17,
        "h": 132.29
      },
      "x": 309.07,
      "y": 420.88
    };
    const chartData ={
      chartTitle:'平安银行历史股价',
      update:{
        text:'2018-05-21'
      },
      id:'111',
      data:{
        config:{
            credits:{
              enabled:false
            },
            rangeSelector: {
              selected: 1,
              inputDateFormat: '%Y-%m-%d'
            },
            title: {
              text: '平安银行历史股价'
            },
            xAxis: {
              dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
                week: '%m-%d',
                month: '%y-%m',
                year: '%Y'
              }
            },
            rangeSelector:{
              buttonSpacing:30,
              buttonTheme: { 
                width:60,
                fill: 'none',
                stroke: '#ccc',
                'stroke-width': 1,
                r: 0,
                style: {
                    color: '#4C4C4C',
                    fontWeight: 'bold',
                    lineHeight:30,
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#E6EFFF',
                        style: {
                            color: '#4C4C4C'
                        }
                    }
    
                }
            },
            buttons: [{
              type: ' day',
              count:1,
              text: '天',
              dataGrouping: {
                  forced: true,
                  units: [['day', [1]]]
              }
          }, {
              type: 'week',
              count:4,
              text: '周',
              dataGrouping: {
                  forced: true,
                  units: [['week', [1]]]
              }
          }, {
              type: 'month',
              text: '月',
              count: 4,
              dataGrouping: {
                  forced: true,
                  units: [['month', [1]]]
              }
          } ,
          {
              type: 'year',
              text: '年',
              count:1,
              dataGrouping: {
                 forced: true,
                 units: [['year', [1]]]
               }
          } ,{
              type: 'all',
              count: 1,
              text: 'all',
              dataGrouping: {
              forced: true,
              units: [['month', [1]]]
             }
          }],
              labelStyle: {
                visibility: 'hidden'
              }
            },
            tooltip:{
              split: false,
              shared: true,
            },
            yAxis: [{
              labels: {
                align: 'right',
                x: -3
              },
              title: {
                text: '股价'
              },
              height: '60%',
              resize: {
                enabled: true
              },
              opposite: false,//y轴位置设置在左边
              lineWidth: 2
            }, {
              labels: {
                align: 'right',
                x: -3
              },
              title: {
                text: '成交量'
              },
              top: '65%',
              height: '35%',
              offset: 0,
              lineWidth: 2,
              opposite: false,//y轴位置设置在左边
            }],
            series: [{
              type: 'candlestick',
              name: '平安银行',
              color: 'green',
              lineColor: 'green',
              upColor: 'red',
              upLineColor: 'red',
              tooltip: {
              },
              navigatorOptions: {
                color: 'green'
              },
              data: [
                [1416528000000,6.975,7.141,6.891,7.1],
                [1417132800000,7.426,8.239,7.364,8.239],
                [1417737600000,9.357,10.176,8.989,9.69],
                [1418342400000,9.253,9.461,9.1,9.28],
                [1423008000000,9.322,9.35,9.114,9.12],
                [1423612800000,9.17,9.218,9.1,9.135]
              ],
              id: 'sz'
            },{
              type: 'column',
              color:'green',
              data: [
                [1416528000000,3565541565],
                [1417132800000,33245677.9],
                [1417737600000,744464646.033],
                [1418342400000,1940530.38],
                [1423008000000,807623.12],
                [1423612800000,554349.5]
              ],
              name: '成交量',
              yAxis: 1,
            }],
            credits: {
              enabled: false
            },
            scrollbar: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        }
      }
    }

    /*
      isShare:         是否显示分享
      isChangeType:    是否显示切换类型
      isChangeColor:   是否显示切换颜色
      isExportData:    是否显示导出数据
      isExportChart:   是否显示导出图片
      注: 以下参数传true显示, false则不会显示, 不传默认展示，即1和2的效果一样:
        1. <ABCHightChart chartData={data} />
        2. <ABCHightChart 
            chartData={data} 
            isShare={true} 
            isChangeType={true} 
            isChangeColor={true} 
            isExportData={true} 
            isExportChart={true} 
          />
    */
    return (
      <div className="App">
        <ABCHightChart 
          chartData={data} 
          isShare={true} 
          isChangeType={true} 
          isChangeColor={true} 
          isExportData={true} 
          isExportChart={true} 
        />
      </div>
    );
  }
}

export default App;

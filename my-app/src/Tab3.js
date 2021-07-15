import React, { Component } from "react";
import './App.css';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import "rsuite-table/dist/css/rsuite-table.css";
import EUR from './images/EUR.png'; 
import USD from './images/USD.png'; 
import GBP from './images/GBP.webp'; 
import JPY from './images/JPY.png'; 

export class TabPanel3 extends Component {
    render() {
        return (
            <div className='heading'>
            <div className='H2'>Прогноз основных курсов валют на завтра</div>
            <div className='H3'> В таблице представлен текущий курс основных валют к рублю по ЦБ РФ,
            
            а таже прогнозируемый курс на завтра по трем моделям прогнозирования.  </div>
            <Table1 />
            <div className='H3'> Прогноз курсов валют дает возможность отследить динамику изменений мнений и оценок аналитиков и компаний о будущих движении курса валют, составить собственный прогноз курса валют на будущее. Прогноз не является руководством к действию, данный сервис не несет ответственности за любые принятые и реализованные финансовые решения на базе таких оценок и выводов.</div>
            </div>
        );
    }
} 

const dataList = [
  { val: 'Доллар (USD)', curs: '74,1373', arima: '73,8266', tbats: '78,5152', nnetar: '78,5202', avartar: USD },
  { val: 'Евро (EUR)', curs: '89,5060', arima: '89,5339', tbats: '91,2431', nnetar: '91,4111', avartar: EUR },
  { val: 'Фунт стерлингов (GBP)', curs: '103,2288', arima: '102,1529', tbats: '100,8809', nnetar: '100,7720', avartar: GBP },
  { val: 'Японская иена (JPY)', curs: '67,9255', arima: '70,6490', tbats: '74,5131', nnetar: '74,5283', avartar: JPY }
];

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

const Table1 = () => (
  <Table data={dataList} height={219}>
  
    <Column width={70} resizable>
      <HeaderCell> </HeaderCell>
      <ImageCell dataKey="avartar"/>
    </Column>
    
    <Column width={233} sort fixed resizable>
      <HeaderCell>Валюта</HeaderCell>
      <Cell dataKey="val" />
    </Column>

    <Column width={140} sort resizable>
      <HeaderCell>Курс ЦБ</HeaderCell>
      <Cell dataKey="curs" />
    </Column>

    <Column width={140} sort resizable>
      <HeaderCell>ARIMA</HeaderCell>
      <Cell dataKey="arima" />
    </Column>
    
    <Column width={140} sort resizable>
      <HeaderCell>TBATS</HeaderCell>
      <Cell dataKey="tbats" />
    </Column>
    
    <Column width={140} sort resizable>
      <HeaderCell>NNETAR</HeaderCell>
      <Cell dataKey="nnetar" />
    </Column>
    
  </Table>
);
 
 

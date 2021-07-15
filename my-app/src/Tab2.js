import React, { Component, useState } from "react";
import './App.css';

import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import data from './data/All_rate.json';

export class TabPanel2 extends Component {
    render() {
        return (
            <div className='heading'>
            <div className='H2'>Курсы валют ЦБ РФ на сегодня</div>
            <Rsuittable />
            </div>
        );
    }
}

export const Rsuittable = () => {
  const [fakeDatum] = useState(data); 

  return (
    <Table data={fakeDatum} height={1640}>
      <Column width={150} align="center" fixed resizable>
        <HeaderCell>Код</HeaderCell>
        <Cell dataKey="CharCode" />
      </Column>
      <Column width={150} align="center" fixed resizable>
        <HeaderCell>Номинал</HeaderCell>
        <Cell dataKey="Nominal" />
      </Column>
      <Column width={350} align="left" fixed resizable>
        <HeaderCell>Валюта</HeaderCell>
        <Cell dataKey="Name" />
      </Column>
      <Column width={200} align="center" fixed resizable>
        <HeaderCell>Курс ЦБ</HeaderCell>
        <Cell dataKey="Value" />
     </Column>
   </Table>
  );
}

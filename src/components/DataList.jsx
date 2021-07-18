import React, { Component } from 'react';
import { ListItem } from 'semantic-ui-react';

export default class DataList extends Component {
  render() {
    return (
      <div className="w-full mt-5 flex flex-col items-center justify-center">
        <select className="w-6/12 text-2xl text-center">
          <ListItem />
          {/* <option value="volvo">Volvo</option> */}
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  }
}

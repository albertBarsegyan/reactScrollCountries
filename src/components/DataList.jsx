import React, { Component } from 'react';
import { ListItem } from 'semantic-ui-react';

export default class DataList extends Component {
  render() {
    return (
      <div className="w-full mt-5 flex flex-col items-center justify-center">
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Service.css';

import Sheader from '../../containers/Sheader/Sheader.jsx';
import Sbody from '../../containers/Sbody/Sbody.jsx';

class Service extends Component {
  render() {
    return (
        <div>
            <Sheader />
            <Sbody />
        </div>
    );
  }
}

export default Service;

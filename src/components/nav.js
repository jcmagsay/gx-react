import React from 'react'
import {Link} from 'react-router';
import Navigation from 'react-toolbox/lib/navigation';
import Link2 from 'react-toolbox/lib/link';

const Nav = React.createClass({
  render: function() {
    const actions = [
      { label: 'Alarm', raised: true, icon: 'access_alarm'},
      { label: 'Location', raised: true, accent: true, icon: 'room'}
    ];
    return (
      <Navigation type="vertical">
        <Link2 href="#/" label="GX" />
        <Link2 href="#/expeditions" label="EXPEDITIONS" />
        <Link2 href="#/about" label="ABOUT" />
        <Link2 href="#/donate" label="DONATE" />
        <Link2 href="#/account" label="ACCOUNT" />
      </Navigation>
    )
  }
});

export default Nav;

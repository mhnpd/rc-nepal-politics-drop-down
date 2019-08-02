import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { SelectDistrict } from '../src/component/SelectDistrict';

import "bootstrap/dist/css/bootstrap.min.css"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SelectProvinces } from '../src/component/SelectProvinces';


storiesOf('District', module)
  .add('In Nepali', () => {
    return (
      <div className="container mt-5">
        <h4>जिल्ला</h4>
        <SelectDistrict lang="npl" placeholder="जिल्ला" isClearable isSearchable />
        <div className="mt-4">
          <SyntaxHighlighter language="javascript" style={docco}>
            {` <SelectDistrict lang="npl" placeholder="जिल्ला" isClearable />`}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  })
  .add('In English', () => (
    <div className="container mt-5">
      <h4>District</h4>
      <SelectDistrict lang="en" placeholder="District" isClearable isSearchable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {` <SelectDistrict lang="en" placeholder="District" isClearable isSearchable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ));

storiesOf('Provinces', module)
  .add("In Nepali", () => (
    <div className="container mt-5">
      <h4>प्रदेश</h4>
      <SelectProvinces lang="npl" placeholder="प्रदेश" isClearable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {`<SelectProvinces lang="npl" placeholder="प्रदेश" isClearable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ))
  .add("In English", () => (
    <div className="container mt-5">
      <h4>Provinces</h4>
      <SelectProvinces lang="en" placeholder="Provinces" isClearable isSearchable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {` <SelectProvinces lang="en" placeholder="Provinces" isClearable isSearchable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ));

  storiesOf('Municipalities', module)
  .add("In Nepali", () => (
    <div className="container mt-5">
      <h4>नगरपालिका</h4>
      <SelectProvinces lang="npl" placeholder="नगरपालिका" isClearable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {`<SelectProvinces lang="npl" placeholder="नगरपालिका" isClearable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ))
  .add("In English", () => (
    <div className="container mt-5">
      <h4>Municipalities</h4>
      <SelectProvinces lang="en" placeholder="Municipalities" isClearable isSearchable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {` <SelectProvinces lang="en" placeholder="Municipalities" isClearable isSearchable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ));

  storiesOf('Rural Municipalities', module)
  .add("In Nepali", () => (
    <div className="container mt-5">
      <h4>गाउँपालिका</h4>
      <SelectProvinces lang="npl" placeholder="गाउँपालिका" isClearable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {`<SelectProvinces lang="npl" placeholder="गाउँपालिका" isClearable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ))
  .add("In English", () => (
    <div className="container mt-5">
      <h4>Rural Municipals</h4>
      <SelectProvinces lang="en" placeholder="Gaunpalika" isClearable isSearchable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {` <SelectProvinces lang="en" placeholder="Gaunpalika" isClearable isSearchable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ));


  // उप महानगरपालिका
  storiesOf('Sub Metropolitan', module)
  .add("In Nepali", () => (
    <div className="container mt-5">
      <h4>उप महानगरपालिका</h4>
      <SelectProvinces lang="npl" placeholder="उप महानगरपालिका" isClearable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {`<SelectProvinces lang="npl" placeholder="उप महानगरपालिका" isClearable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ))
  .add("In English", () => (
    <div className="container mt-5">
      <h4>Sub Metropolitan</h4>
      <SelectProvinces lang="en" placeholder="Sub Metropolitan" isClearable isSearchable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {` <SelectProvinces lang="en" placeholder="Sub Metropolitan" isClearable isSearchable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ));

  // महानगरपालिका
  storiesOf('Metropolitan', module)
  .add("In Nepali", () => (
    <div className="container mt-5">
      <h4>महानगरपालिका</h4>
      <SelectProvinces lang="npl" placeholder="महानगरपालिका" isClearable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {`<SelectProvinces lang="npl" placeholder="महानगरपालिका" isClearable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ))
  .add("In English", () => (
    <div className="container mt-5">
      <h4>Metropolitan</h4>
      <SelectProvinces lang="en" placeholder="Metropolitan" isClearable isSearchable />
      <div className="mt-4">
        <SyntaxHighlighter language="javascript" style={docco}>
          {` <SelectProvinces lang="en" placeholder="Metropolitan" isClearable isSearchable />`}
        </SyntaxHighlighter>
      </div>
    </div>
  ));
  
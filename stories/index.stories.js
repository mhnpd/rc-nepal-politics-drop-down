import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import NepalPolitics from '../src/index';
import { SelectDistrict } from '../src/component/SelectDistrict';



storiesOf('District', module)
  .add('with text', () => {
    return (
      <div>
      <h3>District Selector </h3>
      <SelectDistrict lang="en" placeholder="District" isClearable isSearchable />
      </div>
    )
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import appCss from 'components/app.css';

describe('<App />', function () {

  beforeEach(function () {
    this.component = shallow(<App />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "index"', function () {
      expect(this.component.hasClass(appCss.index)).to.equal(true);
    });
  });
});

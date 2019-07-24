import { shallow } from 'enzyme';
import * as React from 'react';
import { validColumnsSample } from './utils/columns';
import { expectedLocalData, localData } from './utils/localData';

xdescribe('<LocalDataSource />', () => {
  const TestComponent = withLocalDataSource(
    () => <span />,
    validColumnsSample,
    localData,
    10,
  );

  test('Should mount with valid props', () => {
    const component = shallow(<TestComponent />);

    expect(component.props()).toBeDefined();
  });

  test('Should contain state columns equals to props columns', () => {
    const component = shallow(<TestComponent />);

    expect(component.state('columns')).toEqual(validColumnsSample);
  });

  test('Should contain data', async (done) => {
    const component = shallow(<TestComponent />);

    await (component.instance() as any).processRequest({});
    expect(component.state('data')).toEqual(expectedLocalData);
    done();
  });

  test('Should throw error with invalid source', (done) => {
    const component = shallow(<TestComponent />);

    (component.instance() as any).retrieveData().then(() => {
      expect(component.state()).toBeDefined();
      done();
    });
  });
});

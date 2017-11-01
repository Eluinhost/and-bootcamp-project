import React from 'react';
import { shallow } from 'enzyme';
import { NonIdealState } from '@blueprintjs/core';
import AsyncLoader from '.';
import { spy, stub } from 'sinon';

class TestComponent extends React.PureComponent {
  render() {
    return null;
  }
}

test('Test refresh is called when mound is loaded', () => {
  const load = jest.fn();

  load.mockReturnValueOnce(Promise.resolve());

  shallow(
    <AsyncLoader load={load} />
  );

  expect(load.mock.calls.length).toEqual(1);
});

describe('Test loading', () => {
  let setState;
  let componentDidMount;

  beforeEach(() => {
    setState = spy(AsyncLoader.prototype, 'setState');
    componentDidMount = stub(AsyncLoader.prototype, 'componentDidMount');
  });

  afterEach(() => {
    AsyncLoader.prototype.setState.restore();
    AsyncLoader.prototype.componentDidMount.restore();
  });

  test('Test loading success', async () => {
    const load = jest.fn()
      .mockReturnValueOnce(Promise.resolve(100));

    const renderer = jest.fn()
      .mockReturnValueOnce(<TestComponent />);

    const component = shallow(
      <AsyncLoader load={load} render={renderer}/>
    );

    await component.instance()._refresh();

    expect(load.mock.calls.length).toBe(1);
    expect(setState.calledTwice);
    expect(setState.firstCall.calledWith({ isLoading: true }));
    expect(setState.secondCall.calledWith({ isLoading: false, data: 100 }));
    expect(renderer.mock.calls.length).toBe(1);
    expect(component.is(TestComponent));
  });

  test('Test loading failed', async () => {
    const load = jest.fn()
      .mockReturnValueOnce(Promise.reject('error'));

    const renderer = jest.fn()
      .mockReturnValueOnce(<TestComponent />);

    const component = shallow(
      <AsyncLoader load={load} render={renderer}/>
    );

    await component.instance()._refresh();

    expect(load.mock.calls.length).toBe(1);
    expect(setState.calledTwice);
    expect(setState.firstCall.calledWith({ isLoading: true }));
    expect(setState.secondCall.calledWith({ isLoading: false, error: 'Unable to do shit' }));
    expect(renderer.mock.calls.length).toBe(0);
    expect(!component.is(TestComponent));
  });
});

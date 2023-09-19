import Modal from '@components/Modal';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
  describe('When component called', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      render(
        <Modal>
          <h1>Title test</h1>
        </Modal>,
      );
    });

    it('should render the Button', () => {
      const button = screen.getByTestId('modal__button');
      expect(button).toBeInTheDocument();
    });

    it('should render the Dialog', () => {
      const container = screen.getByTestId('modal__container');
      expect(container).toBeInTheDocument();
    });

    it('should render the Modal', () => {
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
  });

  describe('When component called with onOpen event', () => {
    it('should call onOpen function when menu is opened', () => {
      const fn = jest.fn();
      render(<Modal onOpen={fn}></Modal>);
      const button = screen.getByTestId('modal__button');
      const container = screen.getByTestId('modal__container');

      expect(fn).toBeCalledTimes(0);
      act(() => button.click());
      expect(fn).toBeCalledTimes(1);
      act(() => container.click());
      act(() => button.click());
      expect(fn).toBeCalledTimes(2);
    });
  });
});

import Modal from '@components/Modal';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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

    it('should render the close icon', () => {
      const closeIcon = screen.getByTestId('modal--icon-close');
      expect(closeIcon).toBeInTheDocument();
    });

    describe('When Close Icon is clicked', () => {
      it('should close the modal', () => {
        const button = screen.getByTestId('modal__button');
        const modal = screen.getByTestId('modal');
        const closeIcon = screen.getByTestId('modal--icon-close');

        expect(modal.getAttribute('data-rm-is-open')).toEqual('false');
        act(() => button.click());
        expect(modal.getAttribute('data-rm-is-open')).toEqual('true');
        fireEvent.click(closeIcon);
        expect(modal.getAttribute('data-rm-is-open')).toEqual('false');
      });
    });
  });
});
